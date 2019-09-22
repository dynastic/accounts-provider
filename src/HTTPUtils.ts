import axios, { AxiosResponse } from "axios";

type HTTPMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export type HTTPHeaders = {[key: string]: string};

type HTTPRequest = {
  url: string,
  query?: {[key: string]: any} | string,
  body?: any,
  headers?: HTTPHeaders,
  disableWithCredentials?: boolean
  timeout?: number;
};

export type HTTPResponse = {
  status: number,
  headers: {[key: string]: string},
  body: any,
};

type HTTPError = {
  err: Error,
};

export interface Response {
    headers: {
        [key: string]: string
    };
    body: any;
    status: number;
}

const requests: any[] = [];

function sendRequest(method: HTTPMethod, opts: HTTPRequest, resolve: (res: Response) => any, reject: (res: Response) => any) {
  const queryInURL = typeof opts.query === "string";
  const req = {
    url: opts.url + (queryInURL ? "?" + opts.query : ""),
    method,
    headers: opts.headers,
    params: queryInURL ? undefined : opts.query,
    data: opts.body,
    withCredentials: !opts.disableWithCredentials,
    timeout: typeof opts.timeout === "number" ? opts.timeout * 1000 : undefined
  };

  var parseResponse = (res: AxiosResponse<any>) => {
    if (!res) {
      return reject(new Error("Didn't get a reply from the server.") as any);
    }
    let data = res.data;
    if (typeof res.data === "string") {
      try {
        data = JSON.parse(res.data);
      } catch (e) {
        reject(e);
      }
    }

    const newRes = {
      headers: res.headers,
      body: data,
      status: res.status
    }

    if (res.status !== 200) return reject(newRes);
    resolve(newRes);
  }

  axios.request(req).then(res => parseResponse(res)).catch((err) => parseResponse(err.response));
}

function makeRequest(
  method: HTTPMethod,
  opts: string | HTTPRequest
): Promise<HTTPResponse> {
  return new Promise((resolve, reject) => {
    if (typeof opts === 'string') {
      opts = {url: opts};
    }
    sendRequest(method, opts, resolve, reject);
  });
}

export type HTTPFunction = (req: string | HTTPRequest) => Promise<HTTPResponse>;

const operations = {
  get: makeRequest.bind(null, 'get') as HTTPFunction,
  post: makeRequest.bind(null, 'post') as HTTPFunction,
  put: makeRequest.bind(null, 'put') as HTTPFunction,
  patch: makeRequest.bind(null, 'patch') as HTTPFunction,
  delete: makeRequest.bind(null, 'delete') as HTTPFunction
};

namespace HTTPUtils {
  export const get = makeRequest.bind(null, 'get') as HTTPFunction;
  export const post = makeRequest.bind(null, 'post') as HTTPFunction;
  export const put = makeRequest.bind(null, 'put') as HTTPFunction;
  export const patch = makeRequest.bind(null, 'patch') as HTTPFunction;
  export const del = makeRequest.bind(null, 'delete') as HTTPFunction;
}

export default HTTPUtils;

export const HTTPDebugValues = {
    operations,
    makeRequest,
    sendRequest,
    requests
  }
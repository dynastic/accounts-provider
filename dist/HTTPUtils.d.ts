declare type HTTPMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';
export declare type HTTPHeaders = {
    [key: string]: string;
};
type HTTPRequest = {
    url: string;
    query?: {
        [key: string]: any;
    } | string;
    body?: any;
    headers?: HTTPHeaders;
    disableWithCredentials?: boolean;
};
export declare type HTTPResponse = {
    status: number;
    headers: {
        [key: string]: string;
    };
    body: any;
};
export interface Response {
    headers: {
        [key: string]: string;
    };
    body: any;
    status: number;
}
declare function sendRequest(method: HTTPMethod, opts: HTTPRequest, resolve: (res: Response) => any, reject: (res: Response) => any): void;
declare function makeRequest(method: HTTPMethod, opts: string | HTTPRequest): Promise<HTTPResponse>;
export declare type HTTPFunction = (req: string | HTTPRequest) => Promise<HTTPResponse>;
declare namespace HTTPUtils {
    const get: HTTPFunction;
    const post: HTTPFunction;
    const put: HTTPFunction;
    const patch: HTTPFunction;
    const del: HTTPFunction;
}
export default HTTPUtils;
export declare const HTTPDebugValues: {
    operations: {
        get: HTTPFunction;
        post: HTTPFunction;
        put: HTTPFunction;
        patch: HTTPFunction;
        delete: HTTPFunction;
    };
    makeRequest: typeof makeRequest;
    sendRequest: typeof sendRequest;
    requests: any[];
};

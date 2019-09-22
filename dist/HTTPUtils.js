"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const requests = [];
function sendRequest(method, opts, resolve, reject) {
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
    var parseResponse = (res) => {
        if (!res) {
            return reject(new Error("Didn't get a reply from the server."));
        }
        let data = res.data;
        if (typeof res.data === "string") {
            try {
                data = JSON.parse(res.data);
            }
            catch (e) {
                reject(e);
            }
        }
        const newRes = {
            headers: res.headers,
            body: data,
            status: res.status
        };
        if (res.status !== 200)
            return reject(newRes);
        resolve(newRes);
    };
    axios_1.default.request(req).then(res => parseResponse(res)).catch((err) => parseResponse(err.response));
}
function makeRequest(method, opts) {
    return new Promise((resolve, reject) => {
        if (typeof opts === 'string') {
            opts = { url: opts };
        }
        sendRequest(method, opts, resolve, reject);
    });
}
const operations = {
    get: makeRequest.bind(null, 'get'),
    post: makeRequest.bind(null, 'post'),
    put: makeRequest.bind(null, 'put'),
    patch: makeRequest.bind(null, 'patch'),
    delete: makeRequest.bind(null, 'delete')
};
var HTTPUtils;
(function (HTTPUtils) {
    HTTPUtils.get = makeRequest.bind(null, 'get');
    HTTPUtils.post = makeRequest.bind(null, 'post');
    HTTPUtils.put = makeRequest.bind(null, 'put');
    HTTPUtils.patch = makeRequest.bind(null, 'patch');
    HTTPUtils.del = makeRequest.bind(null, 'delete');
})(HTTPUtils || (HTTPUtils = {}));
exports.default = HTTPUtils;
exports.HTTPDebugValues = {
    operations,
    makeRequest,
    sendRequest,
    requests
};

import * as Spec0 from "./spec0";
import { HTTPHeaders } from "./HTTPUtils";
import { DynasticAccountsAPI } from "./API";
export declare class DynasticAccountsAuthedAPI {
    token: string;
    extraHeaders: HTTPHeaders;
    api: DynasticAccountsAPI;
    constructor(token: string, api: DynasticAccountsAPI);
    getHeaders(headers?: HTTPHeaders): HTTPHeaders;
    basicUser(): Promise<Spec0.BasicUserResponse>;
}

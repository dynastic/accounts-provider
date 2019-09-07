import * as Spec0 from "./spec0";
import { extractBody } from "./ResponseUtils";
import HTTPUtils, { HTTPHeaders } from "./HTTPUtils";
import { DynasticAccountsAPI } from "./API";

export class DynasticAccountsAuthedAPI {
    extraHeaders: HTTPHeaders;
    api: DynasticAccountsAPI;

    constructor(public token: string, api: DynasticAccountsAPI) {
        this.extraHeaders = { Authorization: "Bearer " + token, "X-Dynastic-Client-ID": api.clientID, "X-Dynastic-Client-Secret": api.clientSecret };
        this.api = api;
    }

    getHeaders(headers: HTTPHeaders = {}): HTTPHeaders {
        return Object.assign(this.extraHeaders, headers);
    }

    /* User API */

    basicUser(): Promise<Spec0.BasicUserResponse> {
        return extractBody(HTTPUtils.get({url: this.api.API_V0.USER.BASE, query: "basic", headers: this.getHeaders(), timeout: 3}));
    }
}
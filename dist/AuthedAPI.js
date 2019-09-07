"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ResponseUtils_1 = require("./ResponseUtils");
const HTTPUtils_1 = __importDefault(require("./HTTPUtils"));
class DynasticAccountsAuthedAPI {
    constructor(token, api) {
        this.token = token;
        this.extraHeaders = { Authorization: "Bearer " + token, "X-Dynastic-Client-ID": api.clientID, "X-Dynastic-Client-Secret": api.clientSecret };
        this.api = api;
    }
    getHeaders(headers = {}) {
        return Object.assign(this.extraHeaders, headers);
    }
    /* User API */
    basicUser() {
        return ResponseUtils_1.extractBody(HTTPUtils_1.default.get({ url: this.api.API_V0.USER.BASE, query: "basic", headers: this.getHeaders(), timeout: 3 }));
    }
}
exports.DynasticAccountsAuthedAPI = DynasticAccountsAuthedAPI;

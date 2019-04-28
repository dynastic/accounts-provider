"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = require("./Constants");
const AuthedAPI_1 = require("./AuthedAPI");
const util_1 = require("./util");
class DynasticAccountsAPI {
    constructor(apiBaseURL, clientID, clientSecret) {
        this.clientID = clientID;
        this.clientSecret = clientSecret;
        this.API_V0 = Constants_1.API_V0_ROUTES;
        // Prefix API routes with base URL
        this.API_V0 = util_1.prefix(this.API_V0, apiBaseURL);
    }
    getAuthedAPI(token) {
        return new AuthedAPI_1.DynasticAccountsAuthedAPI(token, this);
    }
}
exports.DynasticAccountsAPI = DynasticAccountsAPI;

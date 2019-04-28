import { DynasticAccountsAuthedAPI } from "./AuthedAPI";
export declare class DynasticAccountsAPI {
    clientID: string;
    clientSecret: string;
    API_V0: {
        USER: {
            BASE: string;
        };
    };
    constructor(apiBaseURL: string, clientID: string, clientSecret: string);
    getAuthedAPI(token: string): DynasticAccountsAuthedAPI;
}

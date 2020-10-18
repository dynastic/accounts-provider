import { DynasticAccountsAPI } from "@dynastic-accounts/core";
import * as Constants from "@dynastic-accounts/core";

import { Strategy as OAuth2Strategy, StrategyOptionsWithRequest, VerifyFunctionWithRequest } from "passport-oauth2";

/**
 * The Dynastic Accounts strategy authenticates requests by
 * using the Dynastic Accounts OAuth 2.0 API.
 */
export class Strategy extends OAuth2Strategy {
    private api: DynasticAccountsAPI;
    
    /**
     * Create a new Dynastic Accounts authentication strategy.
     * 
     * @param options Options to create the strategy with.
     * @param verify A callback which accepts an `accessToken`,
     *               `refreshToken` and service-specific `profile`, and then calls the `done`
     *              callback supplying a `user`, which should be set to `false` if the
     *              credentials are not valid.  If an exception occured, `err` should be set.
     */
    constructor(options: StrategyOptions, verify: VerifyFunctionWithRequest) {
        // Setup endpoints
        const apiURL = options.apiBaseURL || Constants.API_BASE, frontendURL = options.frontendBaseURL || Constants.FRONTEND_BASE;

        var realOptions: StrategyOptionsWithRequest = {
            ...options,
            scopeSeparator: "",
            authorizationURL: `${frontendURL}/authorize${options.firstParty === true ? "?forced_consent=true" : ""}`,
            tokenURL: `${apiURL}/v0/oauth/token`
        }
        
        super(realOptions, verify);
        this.api = new DynasticAccountsAPI(options.clientID, options.clientSecret, apiURL);
        this.name = (options as any).name || "dynastic";
    }

    /**
     * Gets the current profile from the Dynastic Accounts API.
     * @param accessToken The access token to use for this request.
     * @param done The callback invoked upon completion.
     */
    userProfile(accessToken: string, done: (err?: Error | null, profile?: any) => void) {
        this.api.getAuthedAPI(accessToken)
                .basicUser()
                .then((user) => done(null, user))
                .catch((err) => done(err));
    }
}

export interface StrategyOptions {
    clientID: string;
    clientSecret: string;
    callbackURL?: string;
    state?: any;
    passReqToCallback: true;

    /**
     * Is the client a first party client?
     */
    firstParty?: boolean;

    /**
     * Array of permission scopes to request.
     */
    scope?: string[];
    
    /**
     * The frontend URL of Dynastic Accounts.
     */
    frontendBaseURL?: string;

    /**
     * The base API URL of Dynastic Accounts.
     */
    apiBaseURL?: string;
}
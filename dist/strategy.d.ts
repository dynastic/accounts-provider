import { Strategy as OAuth2Strategy, StrategyOptionsWithRequest, VerifyFunctionWithRequest } from "passport-oauth2";
/**
 * The Dynastic Accounts strategy authenticates requests by
 * using the Dynastic Accounts OAuth 2.0 API.
 */
export declare class Strategy extends OAuth2Strategy {
    private api;
    /**
     * Create a new Dynastic Accounts authentication strategy.
     *
     * @param options Options to create the strategy with.
     * @param verify A callback which accepts an `accessToken`,
     *               `refreshToken` and service-specific `profile`, and then calls the `done`
     *              callback supplying a `user`, which should be set to `false` if the
     *              credentials are not valid.  If an exception occured, `err` should be set.
     */
    constructor(options: StrategyOptions, verify: VerifyFunctionWithRequest);
    /**
     * Gets the current profile from the Dynastic Accounts API.
     * @param accessToken The access token to use for this request.
     * @param done The callback invoked upon completion.
     */
    userProfile(accessToken: string, done: (err?: Error | null, profile?: any) => void): void;
}
export interface StrategyOptions extends StrategyOptionsWithRequest {
    /**
     * Is the client a first party client?
     */
    firstParty?: boolean;
    /**
     * Array of permission scopes to request.
     */
    scope: string[];
    /**
     * The frontend URL of Dynastic Accounts.
     */
    frontendBaseURL?: string;
    /**
     * The base API URL of Dynastic Accounts.
     */
    apiBaseURL?: string;
}

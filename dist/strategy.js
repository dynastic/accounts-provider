"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@dynastic-accounts/core");
const Constants = __importStar(require("@dynastic-accounts/core"));
const passport_oauth2_1 = require("passport-oauth2");
/**
 * The Dynastic Accounts strategy authenticates requests by
 * using the Dynastic Accounts OAuth 2.0 API.
 */
class Strategy extends passport_oauth2_1.Strategy {
    /**
     * Create a new Dynastic Accounts authentication strategy.
     *
     * @param options Options to create the strategy with.
     * @param verify A callback which accepts an `accessToken`,
     *               `refreshToken` and service-specific `profile`, and then calls the `done`
     *              callback supplying a `user`, which should be set to `false` if the
     *              credentials are not valid.  If an exception occured, `err` should be set.
     */
    constructor(options, verify) {
        // Setup endpoints
        const apiURL = options.apiBaseURL || Constants.API_BASE, frontendURL = options.frontendBaseURL || Constants.FRONTEND_BASE;
        options.authorizationURL = options.authorizationURL || `${frontendURL}/authorize${options.firstParty === true ? "?forced_consent=true" : ""}`;
        options.tokenURL = options.tokenURL || `${apiURL}/v0/oauth/token`;
        options.scopeSeparator = " ";
        super(options, verify);
        this.api = new core_1.DynasticAccountsAPI(apiURL, options.clientID, options.clientSecret);
        this.name = options.name || "dynastic";
    }
    /**
     * Gets the current profile from the Dynastic Accounts API.
     * @param accessToken The access token to use for this request.
     * @param done The callback invoked upon completion.
     */
    userProfile(accessToken, done) {
        this.api.getAuthedAPI(accessToken)
            .basicUser()
            .then((user) => done(null, user))
            .catch((err) => done(err));
    }
}
exports.Strategy = Strategy;

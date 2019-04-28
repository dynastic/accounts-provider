import { prefix } from "./util";

/// The API routes. For example, {LOGIN: "/auth/login"}
export const API_V0_ROUTES = prefix({
    USER: prefix({
        BASE: "/",
    }, "/user")
}, "/v0");

// Error codes. For example, {BAD_USERNAME: 1001}
export const ERROR_CODES = {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    RATE_LIMITED: 429,
    INTERNAL_ERROR: 1000,
    MISSING_FIELDS: 1001,
    INVALID_CREDENTIALS: 1002,
    UNAUTHENTICATED: 1003,
    PASSWORDS_MAY_NOT_MATCH: 1005,
    EMAIL_IN_USE: 1007,
    DEVICE_ALREADY_REGISTERED: 1008,
    HIBP_FLAGGED: 1009,
    HIBP_API_ERROR: 1010,
    ALREADY_HAS_2FA: 1011,
    INVALID_TOTP_TOKEN: 1012,
    NO_2FA: 1013,
    MFA_REQUIRED: 1023,
    OAUTH_FAIL: 1014,
    MISSING_EMAIL: 1015,
    UNVERIFIED_EMAIL: 1016,
    MISSING_RECAPTCHA: 1017,
    INVALID_RECAPTCHA: 1018,
    LINKED_TO_ANOTHER_ACCOUNT: 1019,
    NO_FALLBACK_LOGIN_METHOD: 1020,
    INVALID_SESSION_TOKEN: 1021,
    BANNED: 1022
}

export const API_BASE = "https://accounts-api.dynastic.co";
export const FRONTEND_BASE = "https://accounts.dynastic.co";
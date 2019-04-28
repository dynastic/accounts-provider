export declare const API_V0_ROUTES: {
    USER: {
        BASE: string;
    };
};
export declare const ERROR_CODES: {
    BAD_REQUEST: number;
    UNAUTHORIZED: number;
    FORBIDDEN: number;
    NOT_FOUND: number;
    RATE_LIMITED: number;
    INTERNAL_ERROR: number;
    MISSING_FIELDS: number;
    INVALID_CREDENTIALS: number;
    UNAUTHENTICATED: number;
    PASSWORDS_MAY_NOT_MATCH: number;
    EMAIL_IN_USE: number;
    DEVICE_ALREADY_REGISTERED: number;
    HIBP_FLAGGED: number;
    HIBP_API_ERROR: number;
    ALREADY_HAS_2FA: number;
    INVALID_TOTP_TOKEN: number;
    NO_2FA: number;
    MFA_REQUIRED: number;
    OAUTH_FAIL: number;
    MISSING_EMAIL: number;
    UNVERIFIED_EMAIL: number;
    MISSING_RECAPTCHA: number;
    INVALID_RECAPTCHA: number;
    LINKED_TO_ANOTHER_ACCOUNT: number;
    NO_FALLBACK_LOGIN_METHOD: number;
    INVALID_SESSION_TOKEN: number;
    BANNED: number;
};
export declare const API_BASE = "https://accounts-api.dynastic.co";
export declare const FRONTEND_BASE = "https://accounts.dynastic.co";

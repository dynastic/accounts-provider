import { prefix } from "./util";

/// The API routes. For example, {LOGIN: "/auth/login"}
export const API_V0_ROUTES = prefix({
    USER: prefix({
        BASE: "/",
    }, "/user")
}, "/v0");

export const API_BASE = "https://accounts-api.dynastic.co";
export const FRONTEND_BASE = "https://accounts.dynastic.co";
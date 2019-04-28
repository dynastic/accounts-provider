"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
/// The API routes. For example, {LOGIN: "/auth/login"}
exports.API_V0_ROUTES = util_1.prefix({
    USER: util_1.prefix({
        BASE: "/",
    }, "/user")
}, "/v0");
exports.API_BASE = "https://accounts-api.dynastic.co";
exports.FRONTEND_BASE = "https://accounts.dynastic.co";

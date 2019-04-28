"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const extractAndThrowError = (err) => { throw (err.body && (err.body.error || err.body) || err); };
exports.extractBody = (promise) => promise.then(res => res.body).catch(extractAndThrowError);
exports.extractBoolean = (key, promise) => promise.then(res => res.body[key]).catch(extractAndThrowError);
exports.extractSuccess = (promise) => exports.extractBoolean("success", promise);

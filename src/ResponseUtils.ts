import { HTTPResponse } from "./HTTPUtils";

const extractAndThrowError = (err) => { throw (err.body && (err.body.error || err.body) || err) };
export const extractBody = (promise: Promise<HTTPResponse>) => promise.then(res => res.body).catch(extractAndThrowError);
export const extractBoolean = (key: string, promise: Promise<HTTPResponse>): Promise<boolean> => promise.then(res => res.body[key]).catch(extractAndThrowError);
export const extractSuccess = (promise: Promise<HTTPResponse>): Promise<boolean> => extractBoolean("success", promise);

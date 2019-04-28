"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prefix = (routes, prefixStr) => {
    var val = Object.assign({}, val);
    for (const key in routes) {
        var value = routes[key];
        if (typeof value == "object" && !Array.isArray(value))
            val[key] = exports.prefix(value, prefixStr);
        else if (Array.isArray(value))
            val[key] = value.map(r => `${prefixStr}${r}`);
        else
            val[key] = `${prefixStr}${value}`;
    }
    return val;
};

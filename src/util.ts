export const prefix: <T>(routes: T, prefixStr: string) => T = <T>(routes: T, prefixStr: string) => {
    var val = Object.assign({}, val);
    for (const key in routes) {
        var value = routes[key];
        if (typeof value == "object" && !Array.isArray(value)) val[key] = prefix(value, prefixStr);
        else if (Array.isArray(value)) val[key] = (value as string[]).map(r => `${prefixStr}${r}` as any);
        else val[key] = `${prefixStr}${value}` as any;
    }
    return val;
}
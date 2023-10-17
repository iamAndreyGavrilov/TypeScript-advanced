"use strict";
function toString(data) {
    if (Array.isArray(data)) {
        return data.toString();
    }
    switch (typeof data) {
        case 'string':
            return data;
        case 'boolean':
        case 'number':
        case 'bigint':
        case 'symbol':
        case 'function':
            return data.toString();
        case 'object':
            return JSON.stringify(data);
        default:
            return undefined;
    }
}
console.log(toString([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(toString('string'));
console.log(toString(true));
console.log(toString(1));
console.log(toString({ a: 1, b: 2, c: 3 }));

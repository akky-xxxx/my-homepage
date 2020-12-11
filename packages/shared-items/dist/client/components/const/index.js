"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dummyMenuList = void 0;
var faker_1 = require("faker");
var getMenuList = function () {
    return __spread(Array(5)).fill(null).map(function (_1, index1) { return ({
        parentLabel: faker_1.company.bs(),
        menuChildren: __spread(Array(5)).fill(null).map(function (_2, index2) { return ({
            childLabel: faker_1.company.catchPhrase(),
            href: "#" + (index1 + 1) + "-" + (index2 + 1),
        }); }),
    }); });
};
exports.dummyMenuList = getMenuList();

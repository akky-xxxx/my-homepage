"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUnitStringValue = void 0;
var numberRegExp = /^\d+$/;
var unitStringRegExp = /^\d+(px|%)$/;
var getUnitStringValue = function (value) {
    if (!value)
        return "auto";
    if (typeof value === "number")
        return value + "px";
    if (numberRegExp.test(value))
        return value + "px";
    return unitStringRegExp.test(value) ? value : "auto";
};
exports.getUnitStringValue = getUnitStringValue;

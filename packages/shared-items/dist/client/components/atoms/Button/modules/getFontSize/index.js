"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFontSize = void 0;
var Font_1 = require("../../../../../const/styles/Font");
var _a = Font_1.Font.SIZE, LARGE = _a.LARGE, MIDDLE = _a.MIDDLE, SMALL = _a.SMALL;
var getFontSize = function (args) {
    var size = args.size;
    if (size === "large")
        return LARGE;
    if (size === "small")
        return SMALL;
    return MIDDLE;
};
exports.getFontSize = getFontSize;

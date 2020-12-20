"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBeforeColor = void 0;
var styled_components_1 = require("styled-components");
var getBeforeColor = function (args) {
    var isChecked = args.isChecked;
    if (!isChecked)
        return undefined;
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-left-color: transparent;\n    border-top-color: transparent;\n  "], ["\n    border-left-color: transparent;\n    border-top-color: transparent;\n  "])));
};
exports.getBeforeColor = getBeforeColor;
var templateObject_1;

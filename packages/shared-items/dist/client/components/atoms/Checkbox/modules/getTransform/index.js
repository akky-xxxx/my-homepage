"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransform = void 0;
var styled_components_1 = require("styled-components");
var getTransform = function (args) {
    var isChecked = args.isChecked;
    var rotate = isChecked ? 45 : 0;
    var x = isChecked ? -6 : 0;
    var y = isChecked ? -3 : 0;
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    transform: rotate(", "deg) translate(", "px, ", "px);\n  "], ["\n    transform: rotate(", "deg) translate(", "px, ", "px);\n  "])), rotate, x, y);
};
exports.getTransform = getTransform;
var templateObject_1;

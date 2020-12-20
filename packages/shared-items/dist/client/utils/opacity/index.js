"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.opacity = void 0;
var styled_components_1 = require("styled-components");
var opacity = function (args) {
    var isShow = args.isShow;
    var opacityValue = isShow ? 1 : 0;
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    opacity: ", ";\n  "], ["\n    opacity: ", ";\n  "])), opacityValue);
};
exports.opacity = opacity;
var templateObject_1;

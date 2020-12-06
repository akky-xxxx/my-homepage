"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.common = void 0;
var styled_components_1 = require("styled-components");
var Color_1 = require("../../../../const/styles/Color");
var Font_1 = require("../../../../const/styles/Font");
var BACKGROUND = Color_1.Color.BACKGROUND, PRIMARY_TEXT = Color_1.Color.PRIMARY_TEXT;
var SIZE = Font_1.Font.SIZE;
exports.common = styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  body {\n    background-color: ", ";\n    color: ", ";\n    font-size: ", ";\n    padding: 0 !important /* storybook \u7528\u306B important \u6307\u5B9A */;\n  }\n"], ["\n  body {\n    background-color: ", ";\n    color: ", ";\n    font-size: ", ";\n    padding: 0 !important /* storybook \u7528\u306B important \u6307\u5B9A */;\n  }\n"])), BACKGROUND, PRIMARY_TEXT, SIZE.MIDDLE);
var templateObject_1;

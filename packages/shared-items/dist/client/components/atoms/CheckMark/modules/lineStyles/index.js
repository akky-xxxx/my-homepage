"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lineStyles = void 0;
var styled_components_1 = require("styled-components");
var const_1 = require("../../../../../const");
var DURATION = const_1.Transition.DURATION, TIMING_FUNCTION = const_1.Transition.TIMING_FUNCTION;
var COLOR_FFFFFF = const_1.Color.COLOR_FFFFFF;
var lineStyles = function (args) {
    var isChecked = args.isChecked;
    var beforeWidth = isChecked ? 6 : 13;
    var beforeRotate = isChecked ? 45 : 0;
    var beforeRight = isChecked ? 7 : 0;
    var afterWidth = isChecked ? 10 : 13;
    var afterRotate = isChecked ? -45 : 0;
    var afterLeft = isChecked ? 4 : 0;
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    &::before,\n    &::after {\n      background-color: ", ";\n      bottom: 0;\n      content: \"\";\n      height: 2px;\n      left: 0;\n      margin: auto;\n      position: absolute;\n      right: 0;\n      top: 0;\n      transition: all ", " ", ";\n    }\n\n    &::before {\n      right: ", "px;\n      transform: rotate(", "deg);\n      width: ", "px;\n    }\n\n    &::after {\n      left: ", "px;\n      transform: rotate(", "deg);\n      width: ", "px;\n    }\n  "], ["\n    &::before,\n    &::after {\n      background-color: ", ";\n      bottom: 0;\n      content: \"\";\n      height: 2px;\n      left: 0;\n      margin: auto;\n      position: absolute;\n      right: 0;\n      top: 0;\n      transition: all ", " ", ";\n    }\n\n    &::before {\n      right: ", "px;\n      transform: rotate(", "deg);\n      width: ", "px;\n    }\n\n    &::after {\n      left: ", "px;\n      transform: rotate(", "deg);\n      width: ", "px;\n    }\n  "])), COLOR_FFFFFF, DURATION, TIMING_FUNCTION, beforeRight, beforeRotate, beforeWidth, afterLeft, afterRotate, afterWidth);
};
exports.lineStyles = lineStyles;
var templateObject_1;

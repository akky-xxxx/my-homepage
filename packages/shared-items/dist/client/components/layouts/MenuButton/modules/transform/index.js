"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transform = void 0;
var styled_components_1 = require("styled-components");
var const_1 = require("../../../../../const");
var TIMING_FUNCTION = const_1.Transition.TIMING_FUNCTION;
var DURATION = "0.15s";
var transform = function (args) {
    var isOpen = args.isOpen;
    return isOpen
        ? styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        transition: transform ", " ", " ", ",\n          top ", " ", ",\n          opacity ", " ", " ", ";\n      "], ["\n        transition: transform ", " ", " ", ",\n          top ", " ", ",\n          opacity ", " ", " ", ";\n      "])), DURATION, DURATION, TIMING_FUNCTION, DURATION, TIMING_FUNCTION, DURATION, DURATION, TIMING_FUNCTION) : styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        transition: transform ", " ", ",\n          top ", " ", " ", ",\n          opacity ", " ", ";\n      "], ["\n        transition: transform ", " ", ",\n          top ", " ", " ", ",\n          opacity ", " ", ";\n      "])), DURATION, TIMING_FUNCTION, DURATION, DURATION, TIMING_FUNCTION, DURATION, TIMING_FUNCTION);
};
exports.transform = transform;
var templateObject_1, templateObject_2;

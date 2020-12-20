"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRadius = void 0;
var styled_components_1 = require("styled-components");
var getRadius = function (args) {
    var isChecked = args.isChecked;
    var radius = isChecked ? 0 : 2;
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-radius: ", "px;\n  "], ["\n    border-radius: ", "px;\n  "])), radius);
};
exports.getRadius = getRadius;
var templateObject_1;

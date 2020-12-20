"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColors = void 0;
var styled_components_1 = require("styled-components");
var Color_1 = require("../../../../../const/styles/Color");
var COLOR_2ECC71 = Color_1.Color.COLOR_2ECC71, COLOR_757575 = Color_1.Color.COLOR_757575;
var getColors = function (args) {
    var isChecked = args.isChecked;
    var thisColor = isChecked ? COLOR_2ECC71 : COLOR_757575;
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n  "], ["\n    background-color: ", ";\n  "])), thisColor);
};
exports.getColors = getColors;
var templateObject_1;

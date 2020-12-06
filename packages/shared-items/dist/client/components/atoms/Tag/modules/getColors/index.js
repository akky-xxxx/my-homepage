"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColors = void 0;
var styled_components_1 = require("styled-components");
var Color_1 = require("../../../../../const/styles/Color");
var PRIMARY = Color_1.Color.PRIMARY, SECONDARY = Color_1.Color.SECONDARY, ACCENT = Color_1.Color.ACCENT, COLOR_212121 = Color_1.Color.COLOR_212121, COLOR_FEFEFE = Color_1.Color.COLOR_FEFEFE;
var getColors = function (args) {
    var colorType = args.colorType, isActive = args.isActive;
    var thisColor = COLOR_212121;
    if (colorType === "primary")
        thisColor = PRIMARY;
    if (colorType === "secondary")
        thisColor = SECONDARY;
    if (colorType === "accent")
        thisColor = ACCENT;
    if (isActive) {
        return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background-color: ", ";\n      border: 1px solid ", ";\n      color: ", ";\n    "], ["\n      background-color: ", ";\n      border: 1px solid ", ";\n      color: ", ";\n    "])), thisColor, thisColor, COLOR_FEFEFE);
    }
    return styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    border: 1px solid ", ";\n    color: ", ";\n\n    &:hover {\n      background-color: ", ";\n    }\n  "], ["\n    border: 1px solid ", ";\n    color: ", ";\n\n    &:hover {\n      background-color: ", ";\n    }\n  "])), thisColor, thisColor, thisColor);
};
exports.getColors = getColors;
var templateObject_1, templateObject_2;

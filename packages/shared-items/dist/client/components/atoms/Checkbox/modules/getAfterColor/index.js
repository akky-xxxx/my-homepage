"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAfterColor = void 0;
var styled_components_1 = require("styled-components");
var const_1 = require("../../../../../const");
var COLOR_2ECC71 = const_1.Color.COLOR_2ECC71;
var getAfterColor = function (args) {
    var isChecked = args.isChecked;
    if (!isChecked)
        return undefined;
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-bottom-color: ", ";\n    border-right-color: ", ";\n  "], ["\n    border-bottom-color: ", ";\n    border-right-color: ", ";\n  "])), COLOR_2ECC71, COLOR_2ECC71);
};
exports.getAfterColor = getAfterColor;
var templateObject_1;

"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var const_1 = require("../../../const");
var getColors_1 = require("./modules/getColors");
var DURATION = const_1.Transition.DURATION, TIMING_FUNCTION = const_1.Transition.TIMING_FUNCTION;
var COLOR_FEFEFE = const_1.Color.COLOR_FEFEFE;
exports.Tag = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: transparent;\n  border-radius: ", ";\n  cursor: pointer;\n  font-size: ", ";\n  padding: 4px;\n  transition: color ", " ", ",\n    background-color ", " ", ";\n\n  &:hover {\n    color: ", ";\n  }\n\n  ", "\n"], ["\n  background-color: transparent;\n  border-radius: ", ";\n  cursor: pointer;\n  font-size: ", ";\n  padding: 4px;\n  transition: color ", " ", ",\n    background-color ", " ", ";\n\n  &:hover {\n    color: ", ";\n  }\n\n  ", "\n"])), const_1.Radius.SINGLE, const_1.Font.SIZE.SMALL, DURATION, TIMING_FUNCTION, DURATION, TIMING_FUNCTION, COLOR_FEFEFE, getColors_1.getColors);
var templateObject_1;

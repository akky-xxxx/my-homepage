"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var Radius_1 = require("../../../const/styles/Radius");
var Color_1 = require("../../../const/styles/Color");
var Transition_1 = require("../../../const/styles/Transition");
var getColors_1 = require("./modules/getColors");
var getFontSize_1 = require("./modules/getFontSize");
var DURATION = Transition_1.Transition.DURATION, TIMING_FUNCTION = Transition_1.Transition.TIMING_FUNCTION;
var COLOR_FEFEFE = Color_1.Color.COLOR_FEFEFE, COLOR_757575 = Color_1.Color.COLOR_757575;
exports.Button = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: ", ";\n  cursor: pointer;\n  font-size: ", ";\n  opacity: 1;\n  padding: 8px;\n  transition: opacity ", " ", ";\n\n  &:hover {\n    color: ", ";\n    opacity: 0.8;\n  }\n\n  &:disabled {\n    background-color: ", ";\n    border-color: transparent;\n    cursor: not-allowed;\n\n    &:hover {\n      background-color: ", ";\n      opacity: 1;\n    }\n  }\n\n  ", "\n"], ["\n  border-radius: ", ";\n  cursor: pointer;\n  font-size: ", ";\n  opacity: 1;\n  padding: 8px;\n  transition: opacity ", " ", ";\n\n  &:hover {\n    color: ", ";\n    opacity: 0.8;\n  }\n\n  &:disabled {\n    background-color: ", ";\n    border-color: transparent;\n    cursor: not-allowed;\n\n    &:hover {\n      background-color: ", ";\n      opacity: 1;\n    }\n  }\n\n  ", "\n"])), Radius_1.Radius.SINGLE, getFontSize_1.getFontSize, DURATION, TIMING_FUNCTION, COLOR_FEFEFE, COLOR_757575, COLOR_757575, getColors_1.getColors);
var templateObject_1;

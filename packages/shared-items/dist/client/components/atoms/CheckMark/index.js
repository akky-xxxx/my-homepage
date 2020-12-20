"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckMark = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var const_1 = require("../../../const");
var getColors_1 = require("./modules/getColors");
var lineStyles_1 = require("./modules/lineStyles");
var DURATION = const_1.Transition.DURATION, TIMING_FUNCTION = const_1.Transition.TIMING_FUNCTION;
var SIZE = 20;
exports.CheckMark = styled_components_1.default.i(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: 50%;\n  cursor: pointer;\n  display: inline-block;\n  height: ", "px;\n  padding: 8px;\n  position: relative;\n  transition: opacity ", " ", ",\n    background-color ", " ", ";\n  width: ", "px;\n\n  &:hover {\n    opacity: 0.8;\n  }\n\n  ", ";\n  ", ";\n"], ["\n  border-radius: 50%;\n  cursor: pointer;\n  display: inline-block;\n  height: ", "px;\n  padding: 8px;\n  position: relative;\n  transition: opacity ", " ", ",\n    background-color ", " ", ";\n  width: ", "px;\n\n  &:hover {\n    opacity: 0.8;\n  }\n\n  ", ";\n  ", ";\n"])), SIZE, DURATION, TIMING_FUNCTION, DURATION, TIMING_FUNCTION, SIZE, getColors_1.getColors, lineStyles_1.lineStyles);
var templateObject_1;

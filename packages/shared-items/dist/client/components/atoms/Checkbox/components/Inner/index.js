"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inner = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var const_1 = require("../../const");
var getTransform_1 = require("../../modules/getTransform");
var getRadius_1 = require("../../modules/getRadius");
var getBeforeColor_1 = require("../../modules/getBeforeColor");
var getAfterColor_1 = require("../../modules/getAfterColor");
var const_2 = require("../../../../../const");
var DURATION = const_2.Transition.DURATION, TIMING_FUNCTION = const_2.Transition.TIMING_FUNCTION;
var DIVIDER = const_2.Color.DIVIDER;
exports.Inner = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: ", "px;\n  overflow: hidden;\n  ", ";\n  position: relative;\n  transition: transform ", " ", ";\n  width: ", "px;\n\n  &::before,\n  &::after {\n    border-color: ", ";\n    ", ";\n    border-width: 2px;\n    content: \"\";\n    display: inline-block;\n    height: ", "px;\n    position: absolute;\n    transition: border-color ", " ", ",\n      border-radius ", " ", ";\n    width: ", "px;\n  }\n\n  &::before {\n    ", ";\n    border-left-style: solid;\n    border-top-style: solid;\n  }\n\n  &::after {\n    ", ";\n    border-bottom-style: solid;\n    border-right-style: solid;\n  }\n"], ["\n  height: ", "px;\n  overflow: hidden;\n  ", ";\n  position: relative;\n  transition: transform ", " ", ";\n  width: ", "px;\n\n  &::before,\n  &::after {\n    border-color: ", ";\n    ", ";\n    border-width: 2px;\n    content: \"\";\n    display: inline-block;\n    height: ", "px;\n    position: absolute;\n    transition: border-color ", " ", ",\n      border-radius ", " ", ";\n    width: ", "px;\n  }\n\n  &::before {\n    ", ";\n    border-left-style: solid;\n    border-top-style: solid;\n  }\n\n  &::after {\n    ", ";\n    border-bottom-style: solid;\n    border-right-style: solid;\n  }\n"])), const_1.SIZE, getTransform_1.getTransform, DURATION, TIMING_FUNCTION, const_1.SIZE, DIVIDER, getRadius_1.getRadius, const_1.SIZE, DURATION, TIMING_FUNCTION, DURATION, TIMING_FUNCTION, const_1.SIZE, getBeforeColor_1.getBeforeColor, getAfterColor_1.getAfterColor);
var templateObject_1;

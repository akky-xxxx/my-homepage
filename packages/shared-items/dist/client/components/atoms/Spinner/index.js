"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var const_1 = require("../../../const");
var keyframes_1 = require("./modules/keyframes");
var COLOR_FFFFFF = const_1.Color.COLOR_FFFFFF;
var Spinner = function () { return (react_1.default.createElement(Wrapper, null,
    react_1.default.createElement(SpinnerRing, null),
    react_1.default.createElement(SpinnerRing, null),
    react_1.default.createElement(SpinnerRing, null),
    react_1.default.createElement(Circle, null))); };
exports.Spinner = Spinner;
var SIZE = 60;
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  height: ", "px;\n  position: relative;\n  width: ", "px;\n"], ["\n  display: inline-block;\n  height: ", "px;\n  position: relative;\n  width: ", "px;\n"])), SIZE, SIZE);
var ALL_DURATION = 2.4;
var SpinnerRing = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  animation-duration: ", "s;\n  animation-fill-mode: both;\n  animation-iteration-count: infinite;\n  animation-timing-function: ", ";\n  border: 4px solid ", ";\n  border-radius: 50%;\n  bottom: 0;\n  height: 25px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: ", "px;\n  z-index: 100;\n\n  &:nth-child(1) {\n    animation-name: ", ";\n  }\n\n  &:nth-child(2) {\n    animation-delay: ", "s;\n    animation-name: ", ";\n  }\n\n  &:nth-child(3) {\n    animation-delay: ", "s;\n    animation-name: ", ";\n  }\n"], ["\n  animation-duration: ", "s;\n  animation-fill-mode: both;\n  animation-iteration-count: infinite;\n  animation-timing-function: ", ";\n  border: 4px solid ", ";\n  border-radius: 50%;\n  bottom: 0;\n  height: 25px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: ", "px;\n  z-index: 100;\n\n  &:nth-child(1) {\n    animation-name: ", ";\n  }\n\n  &:nth-child(2) {\n    animation-delay: ", "s;\n    animation-name: ", ";\n  }\n\n  &:nth-child(3) {\n    animation-delay: ", "s;\n    animation-name: ", ";\n  }\n"])), ALL_DURATION, const_1.Transition.TIMING_FUNCTION, COLOR_FFFFFF, SIZE, keyframes_1.ring1, ALL_DURATION / 3, keyframes_1.ring2, (ALL_DURATION / 3) * 2, keyframes_1.ring3);
var CIRCLE_DIAMETER = 10;
var Circle = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  bottom: 0;\n  height: ", "px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: ", "px;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  bottom: 0;\n  height: ", "px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: ", "px;\n"])), COLOR_FFFFFF, CIRCLE_DIAMETER, CIRCLE_DIAMETER);
var templateObject_1, templateObject_2, templateObject_3;

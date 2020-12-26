"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Background = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var polished_1 = require("polished");
var const_1 = require("../../../const");
var utils_1 = require("../../../utils");
var COLOR_212121 = const_1.Color.COLOR_212121;
exports.Background = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  bottom: 0;\n  display: grid;\n  left: 0;\n  ", ";\n  place-items: center;\n  ", ";\n  position: fixed;\n  right: 0;\n  top: 0;\n  transition: opacity ", " ", ";\n  z-index: 100;\n"], ["\n  background-color: ", ";\n  bottom: 0;\n  display: grid;\n  left: 0;\n  ", ";\n  place-items: center;\n  ", ";\n  position: fixed;\n  right: 0;\n  top: 0;\n  transition: opacity ", " ", ";\n  z-index: 100;\n"])), polished_1.rgba(COLOR_212121, 0.3), utils_1.opacity, utils_1.pointerEvents, const_1.Transition.DURATION, const_1.Transition.TIMING_FUNCTION);
var templateObject_1;

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
var const_1 = require("../const");
var const_2 = require("../../../const");
var getRight_1 = require("./modules/getRight");
var COLOR_212121 = const_2.Color.COLOR_212121;
var HEADER_HEIGHT = const_1.LayoutConst.HEADER_HEIGHT, BACKGROUND = const_1.LayoutConst.Z_INDEX.BACKGROUND;
exports.Background = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  right: ", ";\n  top: ", "px;\n  transition: right ", " ", ";\n  z-index: ", ";\n"], ["\n  background-color: ", ";\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  right: ", ";\n  top: ", "px;\n  transition: right ", " ", ";\n  z-index: ", ";\n"])), polished_1.rgba(COLOR_212121, 0.3), getRight_1.getRight, HEADER_HEIGHT, const_2.Transition.DURATION, const_2.Transition.TIMING_FUNCTION, BACKGROUND);
var templateObject_1;

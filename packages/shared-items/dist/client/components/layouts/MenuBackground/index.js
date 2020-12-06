"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuBackground = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var const_1 = require("../../../const");
var const_2 = require("../const");
var getWidth_1 = require("./modules/getWidth");
var getLeft_1 = require("./modules/getLeft");
var getBoxShadow_1 = require("./modules/getBoxShadow");
var BACKGROUND = const_1.Color.BACKGROUND;
var MARGIN10 = const_1.Margin.MARGIN10;
var HEADER_HEIGHT = const_2.LayoutConst.HEADER_HEIGHT, MENU_BACKGROUND = const_2.LayoutConst.Z_INDEX.MENU_BACKGROUND;
exports.MenuBackground = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  bottom: 0;\n  box-shadow: ", ";\n  left: ", ";\n  overflow: auto;\n  padding: ", "px;\n  position: fixed;\n  top: ", "px;\n  transition: width ", " ", ",\n    left ", " ", ";\n  width: ", ";\n  z-index: ", ";\n"], ["\n  background-color: ", ";\n  bottom: 0;\n  box-shadow: ", ";\n  left: ", ";\n  overflow: auto;\n  padding: ", "px;\n  position: fixed;\n  top: ", "px;\n  transition: width ", " ", ",\n    left ", " ", ";\n  width: ", ";\n  z-index: ", ";\n"])), BACKGROUND, getBoxShadow_1.getBoxShadow, getLeft_1.getLeft, MARGIN10, HEADER_HEIGHT, const_1.Transition.DURATION, const_1.Transition.TIMING_FUNCTION, const_1.Transition.DURATION, const_1.Transition.TIMING_FUNCTION, getWidth_1.getWidth, MENU_BACKGROUND);
var templateObject_1;

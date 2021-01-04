"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var const_1 = require("../../../const");
var PRIMARY_TEXT = const_1.Color.PRIMARY_TEXT, COLOR_CCCCCC = const_1.Color.COLOR_CCCCCC;
var SINGLE = const_1.Radius.SINGLE;
var MIDDLE = const_1.Font.SIZE.MIDDLE;
exports.Input = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 1px solid ", ";\n  border-radius: ", ";\n  color: ", ";\n  font-size: ", ";\n  padding: 11px 10px 7px;\n"], ["\n  border: 1px solid ", ";\n  border-radius: ", ";\n  color: ", ";\n  font-size: ", ";\n  padding: 11px 10px 7px;\n"])), COLOR_CCCCCC, SINGLE, PRIMARY_TEXT, MIDDLE);
var templateObject_1;

"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var const_1 = require("../../const");
exports.Wrapper = styled_components_1.default.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n  display: inline-block;\n  height: ", "px;\n  overflow: hidden;\n  position: relative;\n  vertical-align: text-top;\n  width: ", "px;\n\n  & input {\n    height: ", "px;\n    opacity: 0;\n    position: absolute;\n    width: ", "px;\n  }\n"], ["\n  cursor: pointer;\n  display: inline-block;\n  height: ", "px;\n  overflow: hidden;\n  position: relative;\n  vertical-align: text-top;\n  width: ", "px;\n\n  & input {\n    height: ", "px;\n    opacity: 0;\n    position: absolute;\n    width: ", "px;\n  }\n"])), const_1.SIZE, const_1.SIZE, const_1.SIZE, const_1.SIZE);
var templateObject_1;

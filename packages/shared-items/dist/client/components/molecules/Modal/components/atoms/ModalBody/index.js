"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalBody = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var const_1 = require("../../../../../../const");
var MARGIN10 = const_1.Margin.MARGIN10;
exports.ModalBody = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex-grow: 1;\n  overflow: auto;\n  padding: 0 ", "px;\n"], ["\n  flex-grow: 1;\n  overflow: auto;\n  padding: 0 ", "px;\n"])), MARGIN10);
var templateObject_1;

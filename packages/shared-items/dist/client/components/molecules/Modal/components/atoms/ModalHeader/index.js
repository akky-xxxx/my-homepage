"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalHeader = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var const_1 = require("../../../../../../const");
var DIVIDER = const_1.Color.DIVIDER;
var MARGIN10 = const_1.Margin.MARGIN10;
var ModalHeader = function (props) {
    var hasHeader = props.hasHeader, title = props.title;
    if (!hasHeader)
        return null;
    return (react_1.default.createElement(Wrapper, null,
        react_1.default.createElement(TitleWrapper, null, title !== null && title !== void 0 ? title : "")));
};
exports.ModalHeader = ModalHeader;
var Wrapper = styled_components_1.default.header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-bottom: 1px solid ", ";\n  flex-shrink: 0;\n  margin-bottom: ", "px;\n  padding: 0 ", "px ", "px;\n  word-break: break-word;\n"], ["\n  border-bottom: 1px solid ", ";\n  flex-shrink: 0;\n  margin-bottom: ", "px;\n  padding: 0 ", "px ", "px;\n  word-break: break-word;\n"])), DIVIDER, MARGIN10, MARGIN10, MARGIN10);
var TitleWrapper = styled_components_1.default.h2(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  min-height: 24px;\n"], ["\n  min-height: 24px;\n"])));
var templateObject_1, templateObject_2;

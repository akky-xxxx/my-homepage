"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuChild = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var link_1 = __importDefault(require("next/link"));
var polished_1 = require("polished");
var const_1 = require("../../../../../../const");
var PRIMARY = const_1.Color.PRIMARY, PRIMARY_TEXT = const_1.Color.PRIMARY_TEXT;
var MARGIN10 = const_1.Margin.MARGIN10, MARGIN15 = const_1.Margin.MARGIN15;
var MIDDLE = const_1.Font.SIZE.MIDDLE;
var MenuChild = function (props) {
    var childLabel = props.childLabel, href = props.href;
    return (react_1.default.createElement("li", null,
        react_1.default.createElement(link_1.default, { href: href, passHref: true },
            react_1.default.createElement(StyledAnchor, null, childLabel))));
};
exports.MenuChild = MenuChild;
var StyledAnchor = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  display: block;\n  font-size: ", ";\n  padding: ", "px ", "px;\n  position: relative;\n  text-decoration: none;\n  word-break: break-word;\n  z-index: 20;\n\n  &::after {\n    background-color: ", ";\n    bottom: 0;\n    content: \"\";\n    display: block;\n    left: 0;\n    position: absolute;\n    top: 0;\n    transition: width ", " ", ";\n    width: 0;\n    z-index: 10;\n  }\n\n  &:hover {\n    &::after {\n      width: 100%;\n    }\n  }\n"], ["\n  color: ", ";\n  display: block;\n  font-size: ", ";\n  padding: ", "px ", "px;\n  position: relative;\n  text-decoration: none;\n  word-break: break-word;\n  z-index: 20;\n\n  &::after {\n    background-color: ", ";\n    bottom: 0;\n    content: \"\";\n    display: block;\n    left: 0;\n    position: absolute;\n    top: 0;\n    transition: width ", " ", ";\n    width: 0;\n    z-index: 10;\n  }\n\n  &:hover {\n    &::after {\n      width: 100%;\n    }\n  }\n"])), PRIMARY_TEXT, MIDDLE, MARGIN15, MARGIN10, polished_1.rgba(PRIMARY, 0.1), const_1.Transition.DURATION, const_1.Transition.TIMING_FUNCTION);
var templateObject_1;

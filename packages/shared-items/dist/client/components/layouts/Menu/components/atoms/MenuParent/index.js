"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuParent = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var polished_1 = require("polished");
var MenuChild_1 = require("../MenuChild");
var const_1 = require("../../../../../../const");
var COLOR_212121 = const_1.Color.COLOR_212121;
var MARGIN10 = const_1.Margin.MARGIN10;
var MenuParent = function (props) {
    var parentLabel = props.parentLabel, menuChildren = props.menuChildren;
    return (react_1.default.createElement(StyledList, null,
        react_1.default.createElement(StyledParagraph, null, parentLabel),
        react_1.default.createElement("ul", null, menuChildren.map(function (menuChild) {
            var childLabel = menuChild.childLabel;
            return (react_1.default.createElement(MenuChild_1.MenuChild, __assign({ key: parentLabel + "-" + childLabel }, menuChild)));
        }))));
};
exports.MenuParent = MenuParent;
var StyledList = styled_components_1.default.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & + & {\n    margin-top: ", "px;\n  }\n"], ["\n  & + & {\n    margin-top: ", "px;\n  }\n"])), MARGIN10);
var StyledParagraph = styled_components_1.default.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  padding: ", "px;\n  word-break: break-word;\n"], ["\n  color: ", ";\n  padding: ", "px;\n  word-break: break-word;\n"])), polished_1.rgba(COLOR_212121, 0.6), MARGIN10);
var templateObject_1, templateObject_2;

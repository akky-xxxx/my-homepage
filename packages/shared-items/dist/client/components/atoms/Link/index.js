"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
var react_1 = __importDefault(require("react"));
var link_1 = __importDefault(require("next/link"));
var styled_components_1 = __importStar(require("styled-components"));
var const_1 = require("../../../const");
var PRIMARY = const_1.Color.PRIMARY;
var MIDDLE = const_1.Font.SIZE.MIDDLE;
var DURATION = const_1.Transition.DURATION, TIMING_FUNCTION = const_1.Transition.TIMING_FUNCTION;
var Link = function (props) {
    var isExternal = props.isExternal, href = props.href, handleClick = props.handleClick, children = props.children;
    if (isExternal && typeof href === "string") {
        return (react_1.default.createElement(LinkComponent, { href: href, target: "_blank", rel: "noreferrer noopener" }, children));
    }
    if (href === "internal") {
        return (react_1.default.createElement(link_1.default, { href: href, passHref: true },
            react_1.default.createElement(LinkComponent, null, children)));
    }
    return (react_1.default.createElement(ClickableText, { type: "button", onClick: handleClick }, children));
};
exports.Link = Link;
var linkStyle = styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  display: inline-block;\n  font-size: ", ";\n  opacity: 1;\n  position: relative;\n  text-decoration: none;\n  transition: opacity ", " ", ";\n\n  &::after {\n    border-bottom: 1px solid ", ";\n    bottom: 1px;\n    content: \"\";\n    display: block;\n    position: absolute;\n    transform: scaleX(0);\n    transform-origin: center;\n    transition: transform ", " ", ";\n    width: 100%;\n  }\n\n  &:hover {\n    opacity: 0.7;\n\n    &::after {\n      transform: scaleY(1);\n    }\n  }\n"], ["\n  color: ", ";\n  display: inline-block;\n  font-size: ", ";\n  opacity: 1;\n  position: relative;\n  text-decoration: none;\n  transition: opacity ", " ", ";\n\n  &::after {\n    border-bottom: 1px solid ", ";\n    bottom: 1px;\n    content: \"\";\n    display: block;\n    position: absolute;\n    transform: scaleX(0);\n    transform-origin: center;\n    transition: transform ", " ", ";\n    width: 100%;\n  }\n\n  &:hover {\n    opacity: 0.7;\n\n    &::after {\n      transform: scaleY(1);\n    }\n  }\n"])), PRIMARY, MIDDLE, DURATION, TIMING_FUNCTION, PRIMARY, DURATION, TIMING_FUNCTION);
var LinkComponent = styled_components_1.default.a(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), linkStyle);
var ClickableText = styled_components_1.default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  appearance: none;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  ", ";\n  font-family: \"Hiragino Kaku Gothic ProN\", sans-serif;\n  font-weight: normal;\n  padding: 0;\n"], ["\n  appearance: none;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  ", ";\n  font-family: \"Hiragino Kaku Gothic ProN\", sans-serif;\n  font-weight: normal;\n  padding: 0;\n"])), linkStyle);
var templateObject_1, templateObject_2, templateObject_3;

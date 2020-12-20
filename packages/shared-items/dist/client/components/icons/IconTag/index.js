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
exports.IconTag = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var useIconTag_1 = require("./modules/useIconTag");
var const_1 = require("../../../const");
exports.IconTag = react_1.memo(function (props) {
    var _a = useIconTag_1.useIconTag(props), size = _a.size, handleClick = _a.handleClick;
    return (react_1.default.createElement(StyledSvg, { width: size, height: size, viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg", onClick: handleClick },
        react_1.default.createElement("g", null,
            react_1.default.createElement("path", { d: "M28.075-0.003L0,28.076L19.927,48l28.076-28.078V0.003L28.075-0.003z M42.672,9.552c-1.166,1.165-3.055,1.165-4.225,0.002  c-1.165-1.169-1.165-3.059-0.002-4.228c1.168-1.166,3.062-1.166,4.227-0.002C43.841,6.496,43.843,8.383,42.672,9.552z", fill: "currentColor" }))));
});
var StyledSvg = styled_components_1.default.svg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n  transition: opacity ", " ", ";\n\n  &:hover {\n    opacity: 0.5;\n  }\n"], ["\n  cursor: pointer;\n  transition: opacity ", " ", ";\n\n  &:hover {\n    opacity: 0.5;\n  }\n"])), const_1.Transition.DURATION, const_1.Transition.TIMING_FUNCTION);
var templateObject_1;

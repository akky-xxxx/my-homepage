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
exports.IconClose = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var useIconClose_1 = require("./modules/useIconClose");
var const_1 = require("../../../const");
exports.IconClose = react_1.memo(function (props) {
    var _a = useIconClose_1.useIconClose(props), size = _a.size, handleClick = _a.handleClick;
    return (react_1.default.createElement(StyledSvg, { width: size, height: size, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", onClick: handleClick },
        react_1.default.createElement("g", null,
            react_1.default.createElement("path", { d: "M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M16.9,15.5l-1.4,1.4L12,13.4l-3.5,3.5   l-1.4-1.4l3.5-3.5L7.1,8.5l1.4-1.4l3.5,3.5l3.5-3.5l1.4,1.4L13.4,12L16.9,15.5z", fill: "currentColor" }))));
});
var StyledSvg = styled_components_1.default.svg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n  transition: opacity ", " ", ";\n\n  &:hover {\n    opacity: 0.5;\n  }\n"], ["\n  cursor: pointer;\n  transition: opacity ", " ", ";\n\n  &:hover {\n    opacity: 0.5;\n  }\n"])), const_1.Transition.DURATION, const_1.Transition.TIMING_FUNCTION);
var templateObject_1;

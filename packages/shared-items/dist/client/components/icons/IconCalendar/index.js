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
exports.IconCalendar = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var useIconCalendar_1 = require("./modules/useIconCalendar");
var const_1 = require("../../../const");
exports.IconCalendar = react_1.memo(function (props) {
    var _a = useIconCalendar_1.useIconCalendar(props), size = _a.size, handleClick = _a.handleClick;
    return (react_1.default.createElement(StyledSvg, { width: size, height: size, viewBox: "-265 388.9 64 64", xmlns: "http://www.w3.org/2000/svg", onClick: handleClick },
        react_1.default.createElement("g", null,
            react_1.default.createElement("path", { d: "M-252.7,443.9h39.4c0.9,0,1.6-0.7,1.6-1.6v-27.6c0-0.2-0.1-0.3-0.3-0.3h-42c-0.2,0-0.3,0.1-0.3,0.3v27.6   C-254.4,443.2-253.6,443.9-252.7,443.9z", fill: "currentColor" }),
            react_1.default.createElement("path", { d: "M-221.5,402.8v-3.3c0-0.9-0.7-1.6-1.6-1.6h-3.3c-0.9,0-1.6,0.7-1.6,1.6v3.3c0,0.9-0.7,1.6-1.6,1.6h-6.6   c-0.9,0-1.6-0.7-1.6-1.6v-3.3c0-0.9-0.7-1.6-1.6-1.6h-3.3c-0.9,0-1.6,0.7-1.6,1.6v3.3c0,0.9-0.7,1.6-1.6,1.6h-6.6   c-0.9,0-1.6,0.7-1.6,1.6v4.6c0,0.2,0.1,0.3,0.3,0.3h41.8c0.2,0,0.3-0.1,0.3-0.3V406c0-0.9-0.7-1.6-1.6-1.6h-6.6   C-220.8,404.5-221.5,403.7-221.5,402.8z", fill: "currentColor" }))));
});
var StyledSvg = styled_components_1.default.svg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n  transition: opacity ", " ", ";\n\n  &:hover {\n    opacity: 0.5;\n  }\n"], ["\n  cursor: pointer;\n  transition: opacity ", " ", ";\n\n  &:hover {\n    opacity: 0.5;\n  }\n"])), const_1.Transition.DURATION, const_1.Transition.TIMING_FUNCTION);
var templateObject_1;

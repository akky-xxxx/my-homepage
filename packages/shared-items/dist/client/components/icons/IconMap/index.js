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
exports.IconMap = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var useIconMap_1 = require("./modules/useIconMap");
var const_1 = require("../../../const");
exports.IconMap = react_1.memo(function (props) {
    var _a = useIconMap_1.useIconMap(props), size = _a.size, handleClick = _a.handleClick;
    return (react_1.default.createElement(StyledSvg, { width: size, height: size, viewBox: "0 0 8.4666665 8.4666669", xmlns: "http://www.w3.org/2000/svg", onClick: handleClick },
        react_1.default.createElement("g", { id: "layer1", transform: "translate(0,-288.53332)" },
            react_1.default.createElement("path", { d: "m 15.996094,0.99609375 c -6.0632836,0 -10.9980445,4.93673065 -10.9980471,11.00000025 -3.8e-6,10.668737 10.3789061,18.779297 10.3789061,18.779297 0.364612,0.290384 0.881482,0.290384 1.246094,0 0,0 10.380882,-8.11056 10.380859,-18.779297 C 27.003893,5.9328244 22.059377,0.99609375 15.996094,0.99609375 Z m 0,6.00195315 c 2.749573,0 5.00585,2.2484784 5.005859,4.9980471 C 21.001971,14.7457 18.745685,17 15.996094,17 c -2.749591,0 -4.998064,-2.2543 -4.998047,-5.003906 9e-6,-2.7495687 2.248474,-4.9980471 4.998047,-4.9980471 z", transform: "matrix(0.26458333,0,0,0.26458333,0,288.53332)", fill: "currentColor" }))));
});
var StyledSvg = styled_components_1.default.svg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n  transition: opacity ", " ", ";\n\n  &:hover {\n    opacity: 0.5;\n  }\n"], ["\n  cursor: pointer;\n  transition: opacity ", " ", ";\n\n  &:hover {\n    opacity: 0.5;\n  }\n"])), const_1.Transition.DURATION, const_1.Transition.TIMING_FUNCTION);
var templateObject_1;

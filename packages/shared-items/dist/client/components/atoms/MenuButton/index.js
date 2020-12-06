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
exports.MenuButton = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var useMenuButton_1 = require("./modules/useMenuButton");
var getRotate_1 = require("./modules/getRotate");
var Transition_1 = require("../../../const/styles/Transition");
exports.MenuButton = react_1.memo(function (props) {
    var _a = useMenuButton_1.useMenuButton(props), handleClick = _a.handleClick, isOpen = _a.isOpen;
    return (react_1.default.createElement(StyledButton, { type: "button" },
        react_1.default.createElement(StyledSvg, { width: 32, height: 32, viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", onClick: handleClick, isOpen: isOpen },
            react_1.default.createElement("g", null,
                react_1.default.createElement("path", { d: "M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z", fill: "currentColor" })))));
});
var StyledButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: transparent;\n  border: none;\n  height: 32px;\n  padding: 0;\n  width: 32px;\n"], ["\n  background-color: transparent;\n  border: none;\n  height: 32px;\n  padding: 0;\n  width: 32px;\n"])));
var StyledSvg = styled_components_1.default.svg(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  cursor: pointer;\n  transform: rotate(", "deg);\n  transition: opacity ", " ", ",\n    transform ", " ", ";\n\n  &:hover {\n    opacity: 0.5;\n  }\n"], ["\n  cursor: pointer;\n  transform: rotate(", "deg);\n  transition: opacity ", " ", ",\n    transform ", " ", ";\n\n  &:hover {\n    opacity: 0.5;\n  }\n"])), getRotate_1.getRotate, Transition_1.Transition.DURATION, Transition_1.Transition.TIMING_FUNCTION, Transition_1.Transition.DURATION, Transition_1.Transition.TIMING_FUNCTION);
var templateObject_1, templateObject_2;

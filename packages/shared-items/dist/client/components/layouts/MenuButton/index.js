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
var getValueByShowStatus_1 = require("./modules/getValueByShowStatus");
var transform_1 = require("./modules/transform");
var const_1 = require("../../../const");
exports.MenuButton = react_1.memo(function (props) {
    var _a = useMenuButton_1.useMenuButton(props), handleClick = _a.handleClick, isOpen = _a.isOpen;
    return (react_1.default.createElement(StyledButton, { type: "button" },
        react_1.default.createElement(IconWrapper, { onClick: handleClick, isOpen: isOpen },
            react_1.default.createElement("div", null),
            react_1.default.createElement("div", null),
            react_1.default.createElement("div", null))));
});
var ICON_WIDTH = 32;
var BAR_HEIGHT = 4;
var StyledButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: transparent;\n  border: none;\n  color: currentColor;\n  height: 32px;\n  padding: 0;\n  width: 32px;\n"], ["\n  background-color: transparent;\n  border: none;\n  color: currentColor;\n  height: 32px;\n  padding: 0;\n  width: 32px;\n"])));
var IconWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  cursor: pointer;\n  height: ", "px;\n  position: relative;\n  transition: opacity ", " ", ";\n  width: ", "px;\n\n  &:hover {\n    opacity: 0.5;\n  }\n\n  & > div {\n    background-color: currentColor;\n    border-radius: ", "px;\n    display: block;\n    height: ", "px;\n    position: absolute;\n    ", ";\n    transform-origin: center;\n    width: ", "px;\n\n    &:nth-child(1) {\n      top: ", "px;\n      transform: rotate(", "deg);\n    }\n\n    &:nth-child(2) {\n      opacity: ", ";\n      top: 14px;\n    }\n\n    &:nth-child(3) {\n      top: ", "px;\n      transform: rotate(", "deg);\n    }\n  }\n"], ["\n  cursor: pointer;\n  height: ", "px;\n  position: relative;\n  transition: opacity ", " ", ";\n  width: ", "px;\n\n  &:hover {\n    opacity: 0.5;\n  }\n\n  & > div {\n    background-color: currentColor;\n    border-radius: ", "px;\n    display: block;\n    height: ", "px;\n    position: absolute;\n    ", ";\n    transform-origin: center;\n    width: ", "px;\n\n    &:nth-child(1) {\n      top: ", "px;\n      transform: rotate(", "deg);\n    }\n\n    &:nth-child(2) {\n      opacity: ", ";\n      top: 14px;\n    }\n\n    &:nth-child(3) {\n      top: ", "px;\n      transform: rotate(", "deg);\n    }\n  }\n"])), ICON_WIDTH, const_1.Transition.DURATION, const_1.Transition.TIMING_FUNCTION, ICON_WIDTH, BAR_HEIGHT / 2, BAR_HEIGHT, transform_1.transform, ICON_WIDTH, getValueByShowStatus_1.getValueByShowStatus(14, 3), getValueByShowStatus_1.getValueByShowStatus(45, 0), getValueByShowStatus_1.getValueByShowStatus(0, 1), getValueByShowStatus_1.getValueByShowStatus(14, 25), getValueByShowStatus_1.getValueByShowStatus(-45, 0));
var templateObject_1, templateObject_2;

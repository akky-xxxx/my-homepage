"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingLayer = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var atoms_1 = require("../../atoms");
var LoadingLayer = function (props) {
    var isShow = props.isShow;
    return (react_1.default.createElement(atoms_1.Background, { isShow: isShow },
        react_1.default.createElement(IconWrapper, null,
            react_1.default.createElement(atoms_1.Spinner, null))));
};
exports.LoadingLayer = LoadingLayer;
var IconWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  height: 100%;\n  place-items: center;\n  width: 100%;\n"], ["\n  display: grid;\n  height: 100%;\n  place-items: center;\n  width: 100%;\n"])));
var templateObject_1;

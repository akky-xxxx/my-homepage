"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalFooter = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var atoms_1 = require("../../../../../atoms");
var const_1 = require("../../../../../../const");
var DIVIDER = const_1.Color.DIVIDER;
var MARGIN10 = const_1.Margin.MARGIN10;
var ModalFooter = function (props) {
    var hasFooter = props.hasFooter, hasCancelButton = props.hasCancelButton, okText = props.okText, cancelText = props.cancelText, handleOkCallback = props.handleOkCallback, handleCancelCallback = props.handleCancelCallback;
    if (!hasFooter)
        return null;
    return (react_1.default.createElement(Wrapper, null,
        react_1.default.createElement(StyledButton, { colorType: "primary", onClick: handleOkCallback }, okText && okText.length ? okText : "OK"),
        hasCancelButton && (react_1.default.createElement(StyledButton, { colorType: "accent", onClick: handleCancelCallback }, cancelText && cancelText.length ? cancelText : "キャンセル"))));
};
exports.ModalFooter = ModalFooter;
var Wrapper = styled_components_1.default.footer(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  display: flex;\n  flex-shrink: 0;\n  justify-content: space-evenly;\n  margin-top: ", "px;\n  padding: ", "px ", "px 0;\n  word-break: break-word;\n"], ["\n  border-top: 1px solid ", ";\n  display: flex;\n  flex-shrink: 0;\n  justify-content: space-evenly;\n  margin-top: ", "px;\n  padding: ", "px ", "px 0;\n  word-break: break-word;\n"])), DIVIDER, MARGIN10, MARGIN10, MARGIN10);
var StyledButton = styled_components_1.default(atoms_1.Button)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  min-width: 120px;\n"], ["\n  min-width: 120px;\n"])));
var templateObject_1, templateObject_2;

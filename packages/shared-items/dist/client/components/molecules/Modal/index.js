"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var ModalHeader_1 = require("./components/atoms/ModalHeader");
var ModalBody_1 = require("./components/atoms/ModalBody");
var ModalFooter_1 = require("./components/atoms/ModalFooter");
var const_1 = require("../../../const");
var rectangle_1 = require("./modules/rectangle");
var utils_1 = require("../../../utils");
var COLOR_FFFFFF = const_1.Color.COLOR_FFFFFF;
var SINGLE = const_1.Radius.SINGLE;
var MARGIN10 = const_1.Margin.MARGIN10;
var DURATION = const_1.Transition.DURATION, TIMING_FUNCTION = const_1.Transition.TIMING_FUNCTION;
var Modal = function (props) {
    var height = props.height, width = props.width, isShow = props.isShow, hasHeader = props.hasHeader, title = props.title, hasFooter = props.hasFooter, hasCancelButton = props.hasCancelButton, okText = props.okText, cancelText = props.cancelText, handleOkCallback = props.handleOkCallback, handleCancelCallback = props.handleCancelCallback, children = props.children;
    return (react_1.default.createElement(ModalWrapper, { height: height, width: width, isShow: isShow, onClick: function (event) { return event.stopPropagation(); } },
        react_1.default.createElement(ModalHeader_1.ModalHeader, { hasHeader: hasHeader, title: title }),
        react_1.default.createElement(ModalBody_1.ModalBody, null, children),
        react_1.default.createElement(ModalFooter_1.ModalFooter, { hasFooter: hasFooter, hasCancelButton: hasCancelButton, okText: okText, cancelText: cancelText, handleOkCallback: handleOkCallback, handleCancelCallback: handleCancelCallback })));
};
exports.Modal = Modal;
var ModalWrapper = styled_components_1.default.main(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", ";\n  display: flex;\n  flex-direction: column;\n  ", ";\n  ", ";\n  overflow: hidden;\n  padding: ", "px 0;\n  ", ";\n  transition: opacity ", " ", ";\n"], ["\n  background-color: ", ";\n  border-radius: ", ";\n  display: flex;\n  flex-direction: column;\n  ", ";\n  ", ";\n  overflow: hidden;\n  padding: ", "px 0;\n  ", ";\n  transition: opacity ", " ", ";\n"])), COLOR_FFFFFF, SINGLE, rectangle_1.rectangle, utils_1.opacity, MARGIN10, utils_1.pointerEvents, DURATION, TIMING_FUNCTION);
var templateObject_1;

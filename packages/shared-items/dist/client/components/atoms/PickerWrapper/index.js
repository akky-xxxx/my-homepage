"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickerWrapper = exports.AccentDayClass = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var polished_1 = require("polished");
var const_1 = require("../../../const");
var COLOR_FFFFFF = const_1.Color.COLOR_FFFFFF, COLOR_CCCCCC = const_1.Color.COLOR_CCCCCC, PRIMARY = const_1.Color.PRIMARY, ACCENT = const_1.Color.ACCENT;
var MIDDLE = const_1.Font.SIZE.MIDDLE;
var MARGIN10 = const_1.Margin.MARGIN10, MARGIN15 = const_1.Margin.MARGIN15;
var DURATION = const_1.Transition.DURATION, TIMING_FUNCTION = const_1.Transition.TIMING_FUNCTION;
exports.AccentDayClass = "is-accentDay";
exports.PickerWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 1px solid ", ";\n  font-size: ", ";\n\n  .react-datepicker__current-month,\n  .react-datepicker__day-name {\n    font-size: ", ";\n  }\n\n  .react-datepicker__current-month {\n    margin-bottom: ", "px;\n  }\n\n  .react-datepicker__navigation {\n    top: ", "px;\n  }\n\n  .react-datepicker__header {\n    background-color: ", ";\n    border-bottom: 1px solid ", ";\n    padding-top: 12px;\n  }\n\n  .react-datepicker__day--selected,\n  .react-datepicker__day--in-range {\n    background-color: ", ";\n    opacity: 1;\n\n    &:hover {\n      opacity: 0.8;\n      transition: opacity ", " ", ";\n    }\n  }\n\n  .react-datepicker__day--in-selecting-range {\n    background-color: ", ";\n    transition: background-color ", " ", ";\n  }\n\n  .react-datepicker__day-name,\n  .react-datepicker__day,\n  .react-datepicker__time-name {\n    line-height: 2rem;\n    width: 2rem;\n  }\n\n  .", " {\n    color: ", ";\n    text-shadow: 0 0 4px ", ", 0 0 4px ", ";\n  }\n"], ["\n  border: 1px solid ", ";\n  font-size: ", ";\n\n  .react-datepicker__current-month,\n  .react-datepicker__day-name {\n    font-size: ", ";\n  }\n\n  .react-datepicker__current-month {\n    margin-bottom: ", "px;\n  }\n\n  .react-datepicker__navigation {\n    top: ", "px;\n  }\n\n  .react-datepicker__header {\n    background-color: ", ";\n    border-bottom: 1px solid ", ";\n    padding-top: 12px;\n  }\n\n  .react-datepicker__day--selected,\n  .react-datepicker__day--in-range {\n    background-color: ", ";\n    opacity: 1;\n\n    &:hover {\n      opacity: 0.8;\n      transition: opacity ", " ", ";\n    }\n  }\n\n  .react-datepicker__day--in-selecting-range {\n    background-color: ", ";\n    transition: background-color ", " ", ";\n  }\n\n  .react-datepicker__day-name,\n  .react-datepicker__day,\n  .react-datepicker__time-name {\n    line-height: 2rem;\n    width: 2rem;\n  }\n\n  .", " {\n    color: ", ";\n    text-shadow: 0 0 4px ", ", 0 0 4px ", ";\n  }\n"])), COLOR_CCCCCC, MIDDLE, MIDDLE, MARGIN10, MARGIN15, COLOR_FFFFFF, COLOR_CCCCCC, PRIMARY, DURATION, TIMING_FUNCTION, polished_1.rgba(PRIMARY, 0.6), DURATION, TIMING_FUNCTION, exports.AccentDayClass, ACCENT, COLOR_FFFFFF, COLOR_FFFFFF);
var templateObject_1;

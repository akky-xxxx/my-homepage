"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
var react_1 = __importDefault(require("react"));
var Wrapper_1 = require("./components/Wrapper");
var Inner_1 = require("./components/Inner");
var Checkbox = function (props) {
    var isChecked = props.isChecked, handleChange = props.handleChange;
    return (react_1.default.createElement(Wrapper_1.Wrapper, null,
        react_1.default.createElement("input", { type: "checkbox", onChange: handleChange, checked: isChecked }),
        react_1.default.createElement(Inner_1.Inner, { isChecked: isChecked })));
};
exports.Checkbox = Checkbox;

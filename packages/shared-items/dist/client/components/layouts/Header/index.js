"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var MenuButton_1 = require("../MenuButton");
var const_1 = require("../const");
var const_2 = require("../../../const");
var HEADER_HEIGHT = const_1.LayoutConst.HEADER_HEIGHT, HEADER = const_1.LayoutConst.Z_INDEX.HEADER;
var PRIMARY = const_2.Color.PRIMARY, COLOR_FFFFFF = const_2.Color.COLOR_FFFFFF;
var MARGIN10 = const_2.Margin.MARGIN10;
var Header = function (props) {
    var isShow = props.isShow, title = props.title, handleClickMenuButton = props.handleClickMenuButton;
    return (react_1.default.createElement(HeaderBackGround, null,
        react_1.default.createElement(MenuButton_1.MenuButton, { isOpen: isShow, onClick: handleClickMenuButton }),
        react_1.default.createElement(StyledH1, null, title)));
};
exports.Header = Header;
var HeaderBackGround = styled_components_1.default.header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  color: ", ";\n  display: flex;\n  height: ", "px;\n  left: 0;\n  padding: ", "px;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: ", ";\n"], ["\n  align-items: center;\n  background-color: ", ";\n  color: ", ";\n  display: flex;\n  height: ", "px;\n  left: 0;\n  padding: ", "px;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: ", ";\n"])), PRIMARY, COLOR_FFFFFF, HEADER_HEIGHT, MARGIN10, HEADER);
var StyledH1 = styled_components_1.default.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-left: ", "px;\n"], ["\n  margin-left: ", "px;\n"])), MARGIN10);
var templateObject_1, templateObject_2;

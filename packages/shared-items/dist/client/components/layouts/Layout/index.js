"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Background_1 = require("../Background");
var Header_1 = require("../Header");
var MenuBackground_1 = require("../MenuBackground");
var Menu_1 = require("../Menu");
var const_1 = require("../const");
var getOverflow_1 = require("./modules/getOverflow");
var const_2 = require("../../../const");
var HEADER_HEIGHT = const_1.LayoutConst.HEADER_HEIGHT;
var BACKGROUND = const_2.Color.BACKGROUND;
var Layout = function (props) {
    var isShow = props.isShow, title = props.title, width = props.width, menuList = props.menuList, handleOpenMenu = props.handleOpenMenu, handleCloseMenu = props.handleCloseMenu, children = props.children;
    var handleClickMenuButton = function () {
        if (isShow) {
            handleOpenMenu();
            return;
        }
        handleCloseMenu();
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Header_1.Header, { isShow: isShow, title: title, handleClickMenuButton: handleClickMenuButton }),
        react_1.default.createElement(MenuBackground_1.MenuBackground, { isShow: isShow, width: width },
            react_1.default.createElement(Menu_1.Menu, { menuList: menuList })),
        react_1.default.createElement(Background_1.Background, { isShow: isShow, onClick: handleCloseMenu }),
        react_1.default.createElement(StyledMain, { isShow: isShow }, children)));
};
exports.Layout = Layout;
var StyledMain = styled_components_1.default.main(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  height: 100vh;\n  overflow: ", ";\n  padding-top: ", "px;\n"], ["\n  background-color: ", ";\n  height: 100vh;\n  overflow: ", ";\n  padding-top: ", "px;\n"])), BACKGROUND, getOverflow_1.getOverflow, HEADER_HEIGHT);
var templateObject_1;

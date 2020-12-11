"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var react_1 = __importDefault(require("react"));
var MenuParent_1 = require("./components/atoms/MenuParent");
var Menu = function (props) {
    var menuList = props.menuList;
    return (react_1.default.createElement("nav", null,
        react_1.default.createElement("ul", null, menuList.map(function (menuParent) {
            var parentLabel = menuParent.parentLabel;
            return react_1.default.createElement(MenuParent_1.MenuParent, __assign({ key: parentLabel }, menuParent));
        }))));
};
exports.Menu = Menu;

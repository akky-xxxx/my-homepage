"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBoxShadow = void 0;
var polished_1 = require("polished");
var const_1 = require("../../../../../const");
var COLOR_212121 = const_1.Color.COLOR_212121;
var getBoxShadow = function (args) {
    var isShow = args.isShow;
    var opacity = isShow ? 0.3 : 0;
    return "0 0 10px " + polished_1.rgba(COLOR_212121, opacity);
};
exports.getBoxShadow = getBoxShadow;

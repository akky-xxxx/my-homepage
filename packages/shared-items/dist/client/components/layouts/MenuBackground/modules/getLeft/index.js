"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLeft = void 0;
var getLeft = function (args) {
    var isShow = args.isShow, width = args.width;
    return isShow ? "0" : width * -1 + "px";
};
exports.getLeft = getLeft;

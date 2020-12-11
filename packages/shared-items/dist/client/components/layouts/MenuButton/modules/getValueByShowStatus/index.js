"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValueByShowStatus = void 0;
var getValueByShowStatus = function (t, f) { return function (args) {
    var isOpen = args.isOpen;
    return isOpen ? t : f;
}; };
exports.getValueByShowStatus = getValueByShowStatus;

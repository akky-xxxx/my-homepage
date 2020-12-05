"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeparatedNumbers = void 0;
var regExp = /(\d)(?=(\d\d\d)+(?!\d))/g;
var getSeparatedNumbers = function (num) {
    return num.toString().replace(regExp, "$1,");
};
exports.getSeparatedNumbers = getSeparatedNumbers;

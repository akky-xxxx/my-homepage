"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDatetime = void 0;
var date_fns_1 = require("date-fns");
var common_1 = require("../../../common");
var DATETIME = common_1.DateFns.FORMAT.DATETIME;
var formatDatetime = function (targetDatetime) {
    return date_fns_1.format(new Date(targetDatetime), DATETIME);
};
exports.formatDatetime = formatDatetime;

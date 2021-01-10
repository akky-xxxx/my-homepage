"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRangePicker = void 0;
var react_1 = require("react");
var useRangePicker = function () {
    var _a = __read(react_1.useState(null), 2), startDate = _a[0], setStartDate = _a[1];
    var _b = __read(react_1.useState(null), 2), endDate = _b[0], setEndDate = _b[1];
    var handleChangeStartDate = react_1.useMemo(function () { return function (date) {
        setStartDate(date);
    }; }, []);
    var handleChangeEndDate = react_1.useMemo(function () { return function (date) {
        setEndDate(date);
    }; }, []);
    return [
        [startDate, handleChangeStartDate],
        [endDate, handleChangeEndDate],
    ];
};
exports.useRangePicker = useRangePicker;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_hooks_1 = require("@testing-library/react-hooks");
var date_fns_1 = require("date-fns");
var index_1 = require("./index");
describe("useRangePicker", function () {
    it("startDate の初期値は null", function () {
        var result = react_hooks_1.renderHook(function () { return index_1.useRangePicker(); }).result;
        expect(result.current[0][0]).toEqual(null);
    });
    it("endDate の初期値は null", function () {
        var result = react_hooks_1.renderHook(function () { return index_1.useRangePicker(); }).result;
        expect(result.current[1][0]).toEqual(null);
    });
    describe("handleChangeStartDate の実行", function () {
        it("引数に null を渡すと startDate に null がセットされる", function () {
            var result = react_hooks_1.renderHook(function () { return index_1.useRangePicker(); }).result;
            react_hooks_1.act(function () { return result.current[0][1](null); });
            expect(result.current[0][0]).toEqual(null);
        });
        it("引数に Date を渡すと startDate にその Date がセットされる", function () {
            var now = new Date();
            var result = react_hooks_1.renderHook(function () { return index_1.useRangePicker(); }).result;
            react_hooks_1.act(function () { return result.current[0][1](now); });
            if (!result.current[0][0])
                return;
            expect(date_fns_1.isEqual(result.current[0][0], now)).toEqual(true);
        });
    });
    describe("handleChangeEndDate の実行", function () {
        it("引数に null を渡すと startDate に null がセットされる", function () {
            var result = react_hooks_1.renderHook(function () { return index_1.useRangePicker(); }).result;
            react_hooks_1.act(function () { return result.current[1][1](null); });
            expect(result.current[1][0]).toEqual(null);
        });
        it("引数に Date を渡すと endDate にその Date がセットされる", function () {
            var now = new Date();
            var result = react_hooks_1.renderHook(function () { return index_1.useRangePicker(); }).result;
            react_hooks_1.act(function () { return result.current[1][1](now); });
            if (!result.current[1][0])
                return;
            expect(date_fns_1.isEqual(result.current[1][0], now)).toEqual(true);
        });
    });
});

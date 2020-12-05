"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
describe("formatDatetime", function () {
    it("UTC が YYYY-MM-DD HH-MM-SS@JST 形式に変換されること", function () {
        var input = "2020-07-12T07:57:24.872Z";
        var output = "2020-07-12 16:57:24";
        expect(index_1.formatDatetime(input)).toEqual(output);
    });
});

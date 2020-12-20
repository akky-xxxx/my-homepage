"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
describe("getUnitStringValue", function () {
    it.each([
        [undefined, "auto"],
        [100, "100px"],
    ])("引数が文字列でなく %s の時は %s を返す", function (input, output) {
        expect(index_1.getUnitStringValue(input)).toEqual(output);
    });
    it.each([
        ["200px", "200px"],
        ["300%", "300%"],
        ["400", "400px"],
        ["abc", "auto"],
    ])("引数が文字列の %s の時は %s を返す", function (input, output) {
        expect(index_1.getUnitStringValue(input)).toEqual(output);
    });
});

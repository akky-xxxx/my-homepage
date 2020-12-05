"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
describe("getSeparatedNumbers", function () {
    it.each([
        [999, "999"],
        [1000, "1,000"],
        [999999, "999,999"],
        [1000000, "1,000,000"],
    ])("%i は `%s` を返す", function (input, output) {
        expect(index_1.getSeparatedNumbers(input)).toEqual(output);
    });
});

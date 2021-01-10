"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
describe("createNullArray", function () {
    it("引数で指定した数の null[] が返される", function () {
        var result = index_1.createNullArray(10);
        expect(result.length).toEqual(10);
        result.forEach(function (value) {
            expect(value).toEqual(null);
        });
    });
});

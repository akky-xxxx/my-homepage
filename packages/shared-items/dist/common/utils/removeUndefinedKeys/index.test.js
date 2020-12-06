"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
describe("removeUndefinedKeys", function () {
    it("値が undefined の key を削除したオブジェクトを返す", function () {
        var data = {
            foo: null,
            bar: undefined,
            baz: "test",
        };
        var expected = {
            foo: null,
            baz: "test",
        };
        expect(index_1.removeUndefinedKeys(data)).toStrictEqual(expected);
    });
});

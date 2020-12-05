"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
describe("createErrorData", function () {
    describe("定義されてる status が渡された時", function () {
        it("渡す filePath と返ってくる filePath は同値", function () {
            var _a;
            var filePath = __filename;
            expect((_a = index_1.createErrorData(filePath, 400)) === null || _a === void 0 ? void 0 : _a.filePath).toEqual(filePath);
        });
        it.each([
            [400, "パラメータが不正です"],
            [404, "資材が見つかりません"],
        ])("%i 時のエラーメッセージは `%s`", function (input, output) {
            var _a;
            expect((_a = index_1.createErrorData(__filename, input)) === null || _a === void 0 ? void 0 : _a.message).toEqual(output);
        });
    });
    describe("undefined を返すパターン", function () {
        it("未定義 status が渡された時", function () {
            expect(index_1.createErrorData(__filename, 0)).toEqual(undefined);
        });
        it("status 未定義時", function () {
            expect(index_1.createErrorData(__filename, 0)).toEqual(undefined);
        });
    });
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
describe("createLoggerBase", function () {
    describe("logger 使用準備", function () {
        it("引数を渡して実行し、関数が返ってくる", function () {
            var createLogger = index_1.createLoggerBase(false);
            expect(typeof createLogger).toEqual("function");
        });
        it("返ってくる関数の引数はファイルパスを指定でき、 logger object を返す", function () {
            var logger = index_1.createLoggerBase(true)(__filename);
            expect(typeof logger).toEqual("object");
        });
    });
    describe("logger method", function () {
        it("logger は info method を持つ", function () {
            var logger = index_1.createLoggerBase(true)(__filename);
            expect(typeof logger.info).toEqual("function");
        });
        it("logger は debug method を持つ", function () {
            var logger = index_1.createLoggerBase(true)(__filename);
            expect(typeof logger.debug).toEqual("function");
        });
        it("logger は warn method を持つ", function () {
            var logger = index_1.createLoggerBase(true)(__filename);
            expect(typeof logger.warn).toEqual("function");
        });
        it("logger は error method を持つ", function () {
            var logger = index_1.createLoggerBase(true)(__filename);
            expect(typeof logger.error).toEqual("function");
        });
    });
});

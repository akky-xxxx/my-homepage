"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLoggerBase = void 0;
var log4js_1 = __importDefault(require("log4js"));
var createLoggerBase = function (isTest) {
    var createLogger = function (filePath) {
        var logger = log4js_1.default.getLogger("[" + filePath.slice(filePath.lastIndexOf("src")) + "]");
        logger.level = isTest ? "all" : "off";
        return logger;
    };
    return createLogger;
};
exports.createLoggerBase = createLoggerBase;

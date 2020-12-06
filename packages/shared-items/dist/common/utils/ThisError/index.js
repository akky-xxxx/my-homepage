"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThisError = void 0;
var ThisError = (function (_super) {
    __extends(ThisError, _super);
    function ThisError(args) {
        var _a, _b, _c, _d;
        var _this = this;
        var status = ((_a = args === null || args === void 0 ? void 0 : args.error) === null || _a === void 0 ? void 0 : _a.status) || (args === null || args === void 0 ? void 0 : args.status) || 500;
        var message = ((_b = args === null || args === void 0 ? void 0 : args.error) === null || _b === void 0 ? void 0 : _b.message) || (args === null || args === void 0 ? void 0 : args.message) || "Internal Server Error";
        _this = _super.call(this, message) || this;
        _this.stack = ((_c = args === null || args === void 0 ? void 0 : args.error) === null || _c === void 0 ? void 0 : _c.stack) || (args === null || args === void 0 ? void 0 : args.stack);
        _this.status = status;
        _this.message = message;
        _this.filePath =
            ((_d = args === null || args === void 0 ? void 0 : args.error) === null || _d === void 0 ? void 0 : _d.filePath) ||
                ((args === null || args === void 0 ? void 0 : args.filePath) && args.filePath.slice(args.filePath.lastIndexOf("src")));
        return _this;
    }
    return ThisError;
}(Error));
exports.ThisError = ThisError;

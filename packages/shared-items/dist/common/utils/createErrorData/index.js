"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createErrorData = void 0;
var createErrorData = function (filePath, status) {
    var message = "";
    if (status === 400)
        message = "パラメータが不正です";
    if (status === 403)
        message = "禁止されています";
    if (status === 404)
        message = "資材が見つかりません";
    if (message.length && status) {
        return {
            status: status,
            filePath: filePath,
            message: message,
        };
    }
    return undefined;
};
exports.createErrorData = createErrorData;

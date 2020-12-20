"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rectangle = void 0;
var getUnitStringValue_1 = require("./modules/getUnitStringValue");
var rectangle = function (args) {
    var _width = args.width, _height = args.height;
    var width = getUnitStringValue_1.getUnitStringValue(_width);
    var height = getUnitStringValue_1.getUnitStringValue(_height);
    return "\n    height: " + height + ";\n    width: " + width + ";\n  ";
};
exports.rectangle = rectangle;

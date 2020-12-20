"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pointerEvents = void 0;
var styled_components_1 = require("styled-components");
var pointerEvents = function (args) {
    var isShow = args.isShow;
    var pointerEventsValue = isShow ? "auto" : "none";
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    pointer-events: ", ";\n  "], ["\n    pointer-events: ", ";\n  "])), pointerEventsValue);
};
exports.pointerEvents = pointerEvents;
var templateObject_1;

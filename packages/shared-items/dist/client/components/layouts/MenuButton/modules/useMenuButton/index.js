"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMenuButton = void 0;
var react_1 = require("react");
var useMenuButton = function (args) {
    var onClick = args.onClick, _a = args.isOpen, isOpen = _a === void 0 ? false : _a;
    var handleClick = react_1.useCallback(function () {
        if (onClick)
            onClick();
    }, []);
    return { handleClick: handleClick, isOpen: isOpen };
};
exports.useMenuButton = useMenuButton;

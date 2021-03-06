"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIconTag = void 0;
var react_1 = require("react");
var SIZE = {
    large: 25,
    middle: 20,
    small: 15,
};
var useIconTag = function (args) {
    var argSize = args.size, onClick = args.onClick;
    var size = react_1.useMemo(function () {
        if (!argSize)
            return SIZE.middle;
        return SIZE[argSize];
    }, [argSize]);
    var handleClick = react_1.useCallback(function () {
        if (onClick)
            onClick();
    }, []);
    return { size: size, handleClick: handleClick };
};
exports.useIconTag = useIconTag;

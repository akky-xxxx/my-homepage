import { FC } from "react";
import { EmptyFunction } from "../../../../common";
export declare type LinkProps = {
    isExternal?: boolean;
    href?: string;
    handleClick?: EmptyFunction;
};
export declare const Link: FC<LinkProps>;

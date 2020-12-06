import { FC } from "react";
import { EmptyFunction } from "../../../../common";
export declare type HeaderProps = {
    isShow: boolean;
    title: string;
    handleClickMenuButton: EmptyFunction;
};
export declare const Header: FC<HeaderProps>;

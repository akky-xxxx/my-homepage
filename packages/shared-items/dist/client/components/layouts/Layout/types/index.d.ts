import { ReactNode } from "react";
import { EmptyFunction } from "../../../../../common";
export declare type LayoutProps = {
    isShow: boolean;
    title: string;
    width: number;
    menu: ReactNode;
    handleOpenMenu: EmptyFunction;
    handleCloseMenu: EmptyFunction;
};

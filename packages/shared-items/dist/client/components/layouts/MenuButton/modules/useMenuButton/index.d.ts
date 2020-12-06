import { EmptyFunction } from "../../../../../../common";
import { MenuButtonProps } from "../../types";
declare type IconHamburgerReturn = {
    isOpen: boolean;
    handleClick: EmptyFunction;
};
declare type UseMenuButton = (args: MenuButtonProps) => IconHamburgerReturn;
export declare const useMenuButton: UseMenuButton;
export {};

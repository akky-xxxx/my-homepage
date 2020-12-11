import { EmptyFunction } from "../../../../../common";
export declare type MenuButtonProps = {
    isOpen?: boolean;
    onClick?: EmptyFunction;
};
export declare type IconBarProps = Pick<MenuButtonProps, "isOpen">;

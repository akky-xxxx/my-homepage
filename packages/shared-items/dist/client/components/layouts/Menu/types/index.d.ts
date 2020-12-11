export declare type MenuChildProps = {
    childLabel: string;
    href: string;
};
export declare type MenuParentProps = {
    parentLabel: string;
    menuChildren: MenuChildProps[];
};
export declare type MenuProps = {
    menuList: MenuParentProps[];
};

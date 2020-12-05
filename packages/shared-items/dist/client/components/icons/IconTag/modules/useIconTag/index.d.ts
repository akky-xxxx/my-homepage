import { EmptyFunction } from "../../../../../../common";
import { IconTagProps } from "../../types";
declare type UseIconTagReturn = {
    size: number;
    handleClick: EmptyFunction;
};
declare type UseIconTag = (args: IconTagProps) => UseIconTagReturn;
export declare const useIconTag: UseIconTag;
export {};

import { EmptyFunction } from "../../../../../../common";
import { IconMapProps } from "../../types";
declare type UseIconMapReturn = {
    size: number;
    handleClick: EmptyFunction;
};
declare type UseIconMap = (args: IconMapProps) => UseIconMapReturn;
export declare const useIconMap: UseIconMap;
export {};

import { EmptyFunction } from "../../../../../../common";
import { IconCalendarProps } from "../../types";
declare type UseIconCalendarReturn = {
    size: number;
    handleClick: EmptyFunction;
};
declare type UseIconCalendar = (args: IconCalendarProps) => UseIconCalendarReturn;
export declare const useIconCalendar: UseIconCalendar;
export {};

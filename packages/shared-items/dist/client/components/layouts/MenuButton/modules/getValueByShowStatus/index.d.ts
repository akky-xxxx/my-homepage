import { IconBarProps } from "../../types";
declare type GetValueByShowStatusMain = (args: IconBarProps) => number;
declare type GetValueByShowStatus = (t: number, f: number) => GetValueByShowStatusMain;
export declare const getValueByShowStatus: GetValueByShowStatus;
export {};

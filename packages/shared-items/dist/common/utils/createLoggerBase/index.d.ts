import { Logger } from "log4js";
declare type CreateLogger = (filePath: string) => Logger;
declare type CreateLoggerBase = (isTest: boolean) => CreateLogger;
export declare const createLoggerBase: CreateLoggerBase;
export {};

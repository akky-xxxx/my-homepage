import { ThisError } from "../ThisError";
declare type CreateErrorData = (filePath: string, status?: number) => Pick<ThisError, "status" | "filePath" | "message"> | undefined;
export declare const createErrorData: CreateErrorData;
export {};

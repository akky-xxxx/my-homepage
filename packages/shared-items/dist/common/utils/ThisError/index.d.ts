declare type Constructor = Partial<{
    stack: string;
    status: number;
    message: string;
    filePath: string;
    error: any;
}>;
export declare class ThisError extends Error {
    status: number;
    message: string;
    filePath?: string;
    constructor(args?: Constructor);
}
export {};

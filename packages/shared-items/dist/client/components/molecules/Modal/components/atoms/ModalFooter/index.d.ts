import { FC } from "react";
import { EmptyFunction } from "../../../../../../../common";
export declare type ModalFooterProps = {
    hasFooter?: boolean;
    hasCancelButton?: boolean;
    okText?: string;
    cancelText?: string;
    handleOkCallback: EmptyFunction;
    handleCancelCallback?: EmptyFunction;
};
export declare const ModalFooter: FC<ModalFooterProps>;

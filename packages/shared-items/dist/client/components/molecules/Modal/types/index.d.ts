import { ModalHeaderProps } from "../components/atoms/ModalHeader";
import { ModalFooterProps } from "../components/atoms/ModalFooter";
export declare type UnitString = string;
export declare type ModalWrapperProps = {
    isShow?: boolean;
    width?: number | UnitString;
    height?: number | UnitString;
};
export declare type ModalProps = ModalWrapperProps & ModalHeaderProps & ModalFooterProps;

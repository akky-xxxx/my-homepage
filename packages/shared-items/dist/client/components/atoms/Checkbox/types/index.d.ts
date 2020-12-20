import { EmptyFunction } from "../../../../../common";
export declare type CheckboxProps = {
    isChecked: boolean;
    handleChange: EmptyFunction;
};
export declare type InnerProps = Pick<CheckboxProps, "isChecked">;

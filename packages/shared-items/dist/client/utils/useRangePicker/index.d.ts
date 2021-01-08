export declare type NullableDate = Date | null;
declare type StartDate = NullableDate;
declare type EndDate = NullableDate;
export declare type HandleChangeRangeDate = (date: NullableDate) => void;
declare type HandleChangeStartDate = HandleChangeRangeDate;
declare type HandleChangeEndDate = HandleChangeRangeDate;
export declare type UseRangePickerReturn = [
    [
        StartDate,
        HandleChangeStartDate
    ],
    [
        EndDate,
        HandleChangeEndDate
    ]
];
export declare type UseRangePicker = () => UseRangePickerReturn;
export declare const useRangePicker: UseRangePicker;
export {};

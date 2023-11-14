import { FieldError, FieldErrorsImpl, FieldValues, Merge, UseFormRegister } from "react-hook-form";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface fieldModelStruct {
    type?: string,
    name?: string,
    placeholder?: string,
    required: boolean,
    minLengthChar: number,
    maxLengthChar: number,
    register: UseFormRegister<FieldValues>, 
    error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined 
}
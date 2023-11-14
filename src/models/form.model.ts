import { FormEventHandler } from "react";

export interface formModelStruct {
    onSubmit?: FormEventHandler<HTMLFormElement>, 
    children: React.ReactNode
    width?: number | string, 
    height?: number | string
}
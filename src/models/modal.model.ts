/* eslint-disable @typescript-eslint/no-explicit-any */
import { functionModelStruct } from "./function.model";

export interface modalModelStruct {
    display: boolean, 
    children: React.ReactNode,
    action?: functionModelStruct<any, any>,
    buttonVariant?: string
}
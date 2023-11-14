import { MouseEventHandler } from "react";

export interface buttonModelStruct {
    title: string, 
    variant?: string, 
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined 
}
import { MouseEventHandler } from "react";

export interface iconModelStruct {
    icon: string,
    className?: string,
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}
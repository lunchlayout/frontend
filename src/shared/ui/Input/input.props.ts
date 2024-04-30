import { ChangeEventHandler } from "react";
import { IDefaultProps } from "@shared/types";

type InputCustomType = "primary" | "secondary"

export interface IInputProps extends IDefaultProps {
    placeholder?: string,
    type?: string,
    customType?: InputCustomType,
    value?: string,
    hasOutline?: boolean,
    required?: boolean
    onChange?: ChangeEventHandler<HTMLInputElement>
}
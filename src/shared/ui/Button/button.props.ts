import { MouseEventHandler, ReactNode } from "react";
import { IDefaultProps } from "@shared/types";

type ButtonType = "primary" | "secondary" | "tertiary" | "simple"

export interface IButtonProps extends IDefaultProps {
    type?: ButtonType
    children: ReactNode
    onClick?: MouseEventHandler<HTMLButtonElement>
}
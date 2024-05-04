import { MouseEventHandler } from "react";
import { IDefaultProps } from "@shared/types";

type DirectionType = "left" | "right"

export interface IButtonControllerProps extends IDefaultProps {
    direction?: DirectionType
    onClick?: MouseEventHandler<HTMLButtonElement>,
    disabled?: boolean
}
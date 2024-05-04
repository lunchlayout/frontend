import { IDefaultProps } from "@shared/types";
import { ReactNode } from "react";

type IconType = "primary" | "secondary" | "tertiary" | "simple"

export interface IIconProps extends IDefaultProps {
    type?: IconType
    children: ReactNode
}
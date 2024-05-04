import { IDefaultProps } from "@shared/types";
import { ReactNode } from "react";


export interface IDishInfoSectionProps extends IDefaultProps {
    label: string,
    children: ReactNode

}
import { IDefaultProps } from "@shared/types";


export interface IProgressProps extends IDefaultProps {
    value: number,
    max?: number,
    label?: string
}
import { IDefaultProps } from "@shared/types";
import { ReactElement } from "react";

interface IProgress {
	value: number;
	max: number;
}

interface IProgressProps extends IDefaultProps, Partial<IProgress> {
	value: number;
	label?: string;
	slider?: ReactElement;
}

export type { IProgress, IProgressProps };

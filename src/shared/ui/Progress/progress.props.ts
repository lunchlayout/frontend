import { IDefaultProps } from "@shared/types";

interface IProgress {
	value: number;
	max: number;
}

interface IProgressProps extends IDefaultProps, Partial<IProgress> {
	value: number;
	label?: string;
}

export type { IProgress, IProgressProps };

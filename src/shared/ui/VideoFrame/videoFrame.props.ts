import { IDefaultProps } from "@shared/types";

export interface IVideoFrameProps extends IDefaultProps {
	title?: string;
	src: string;
	width?: number;
	height?: number;
}

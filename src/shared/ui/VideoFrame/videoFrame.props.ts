import { IDefaultProps } from "@shared/types";

export interface IVideoFrameProps extends IDefaultProps {
	title?: string;
	src: string;
	width?: number | string;
	height?: number | string;
}

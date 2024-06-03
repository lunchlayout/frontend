import { IDefaultProps } from "@shared/types";

export interface IVideoPlayerProps extends IDefaultProps {
	title?: string;
	src: string;
	width?: number | string;
	height?: number | string;
}

import { IDefaultProps } from "@shared/types";

type LoadingType = "lazy" | "eager";

type DecodingType = "async" | "sync" | "auto";

export interface IImageProps extends IDefaultProps {
	src: string;
	loading?: LoadingType;
	srcset?: string;
	sizes?: string;
	alt?: string;
	width?: number;
	height?: number;
	decoding?: DecodingType;
}

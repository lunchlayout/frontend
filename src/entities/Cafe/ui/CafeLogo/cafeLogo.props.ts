import { ICafe } from "@entities/Cafe/types";
import { IDefaultProps, WithOptional } from "@shared/types";
import { IImageProps } from "@shared/ui/Image/image.props";

export interface ICafeLogoProps
	extends IDefaultProps,
		WithOptional<ICafe, "name">,
		Pick<IImageProps, "width" | "height"> {}

import { ICafe } from "@entities/Cafe/types";
import { IDefaultProps } from "@shared/types";

export interface ICafeCardProps
	extends Pick<IDefaultProps, "className">,
		ICafe {}

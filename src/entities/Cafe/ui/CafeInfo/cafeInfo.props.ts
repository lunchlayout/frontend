import { ICafe } from "@entities/Cafe/types";
import { IDefaultProps } from "@shared/types";

export interface ICafeInfoProps
	extends Pick<IDefaultProps, "className">,
		ICafe {}

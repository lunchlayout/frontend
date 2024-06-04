import { IDefaultProps, WithOptional } from "@shared/types";

export interface IDrawerProps
	extends WithOptional<Required<IDefaultProps>, "className"> {
	open?: boolean;
	onClose?: () => void;
}

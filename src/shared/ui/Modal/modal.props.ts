import { IDefaultProps } from "@shared/types";
import { MouseEvent, ReactNode } from "react";

export interface IModalProps extends IDefaultProps {
	children: ReactNode;
	container?: Element;
	isOpen?: boolean;
	onClose?: (
		event?: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
	) => void;
	label?: string;
}

import { MouseEventHandler, ReactNode } from "react";
import { IDefaultProps } from "@shared/types";

type ButtonCustomType = "primary" | "secondary" | "tertiary" | "simple";

type ButtonType = "button" | "submit" | "reset";

export interface IButtonProps extends IDefaultProps {
	customType?: ButtonCustomType;
	type?: ButtonType;
	children: ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
	formId?: string;
}

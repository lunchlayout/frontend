import { ButtonHTMLAttributes, ReactNode } from "react";
import { IDefaultProps } from "@shared/types";

type ButtonCustomType = "filled" | "outlined";

export interface IButtonProps
	extends IDefaultProps,
		Pick<
			ButtonHTMLAttributes<HTMLButtonElement>,
			"type" | "onClick" | "disabled" | "slot"
		> {
	customType?: ButtonCustomType;
	children: ReactNode;
	formId?: string;
	hasHover?: boolean;
}

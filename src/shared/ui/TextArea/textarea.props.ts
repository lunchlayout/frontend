import { TextareaHTMLAttributes } from "react";
import { IDefaultProps } from "@shared/types";

export interface ITextAreaProps
	extends IDefaultProps,
		Pick<
			TextareaHTMLAttributes<HTMLTextAreaElement>,
			"onChange" | "value" | "placeholder" | "disabled" | "required"
		> {
	label?: string;
}

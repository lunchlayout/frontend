import { InputHTMLAttributes } from "react";
import { IDefaultProps } from "@shared/types";

export interface IInputProps
	extends IDefaultProps,
		Pick<
			InputHTMLAttributes<HTMLInputElement>,
			| "type"
			| "placeholder"
			| "value"
			| "required"
			| "disabled"
			| "onChange"
		> {
	hasOutline?: boolean;
}

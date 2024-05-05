import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import { IDefaultProps } from "@shared/types";

type InputCustomType = "primary" | "secondary";

export interface IInputProps extends IDefaultProps {
	placeholder?: string;
	type?: HTMLInputTypeAttribute;
	customType?: InputCustomType;
	value?: string;
	hasOutline?: boolean;
	required?: boolean;
	disabled?: boolean;
	onChange?: ChangeEventHandler<HTMLInputElement>;
}

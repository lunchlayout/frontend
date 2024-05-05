import { ChangeEventHandler } from "react";
import { IDefaultProps } from "@shared/types";

export interface ITextAreaProps extends IDefaultProps {
	placeholder?: string;
	value?: string;
	hasOutline?: boolean;
	required?: boolean;
	onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

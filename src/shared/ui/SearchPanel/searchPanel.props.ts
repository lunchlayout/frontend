import { IDefaultProps } from "@shared/types";
import { FormEventHandler } from "react";

export interface ISearchPanelProps extends IDefaultProps {
	placeholder?: string;
	disabled?: boolean;
	onSubmit: FormEventHandler<HTMLFormElement>;
}

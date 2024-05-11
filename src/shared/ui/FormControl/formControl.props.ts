import { IDefaultProps } from "@shared/types";

export interface IFormControlProps extends IDefaultProps {
	formId?: string;
	resetDisabled?: boolean;
	submitDisabled?: boolean;
}

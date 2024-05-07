import { IDefaultProps } from "@shared/types";
import { ChangeEventHandler } from "react";

export type QuizOptionType = "correct" | "wrong" | "default";

export interface IQuizOptionProps extends IDefaultProps {
	label: string;
	type?: QuizOptionType;
	disabled?: boolean;
	checked: boolean;
	onChange: ChangeEventHandler<HTMLInputElement>;
}

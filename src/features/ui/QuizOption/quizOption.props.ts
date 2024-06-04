import { IDefaultProps } from "@shared/types";
import { ChangeEventHandler } from "react";

type QuizOptionType = "correct" | "wrong" | "default";

interface IQuizOptionProps extends IDefaultProps {
	option: string;
	type?: QuizOptionType;
	disabled?: boolean;
	checked: boolean;
	onChange: ChangeEventHandler<HTMLInputElement>;
}

export type { QuizOptionType, IQuizOptionProps };

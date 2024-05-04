import { IDefaultProps } from "@shared/types";
import { ReactNode, ChangeEventHandler } from "react";


type QuizOptionType = "correct" | "wrong" | "default"

export interface IQuizOptionProps extends IDefaultProps {
    children: ReactNode,
    type?: QuizOptionType,
    checked: boolean,
    onChange: ChangeEventHandler<HTMLInputElement>
}
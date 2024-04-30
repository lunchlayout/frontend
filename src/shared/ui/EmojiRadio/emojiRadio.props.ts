import { ChangeEventHandler } from "react";
import { IDefaultProps } from "@shared/types";

type EmojiType = "happy" | "good" | "normal" | "bad"

export interface IEmojiRadioProps extends IDefaultProps {
    checked?: boolean,
    emoji?: EmojiType,
    onChange?: ChangeEventHandler<HTMLInputElement>
}
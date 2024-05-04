import { ChangeEventHandler } from "react";
import { EmojiTypes, IDefaultProps } from "@shared/types";



export interface IEmojiRadioProps extends IDefaultProps {
    checked: boolean,
    emoji?: keyof typeof EmojiTypes,
    onChange: ChangeEventHandler<HTMLInputElement>
}


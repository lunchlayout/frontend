import { ChangeEventHandler } from "react";
import { IDefaultProps } from "@shared/types";
import { EmojiTypes } from "./emojiTypes";

export interface IEmojiRadioProps extends IDefaultProps {
	checked: boolean;
	emoji?: keyof typeof EmojiTypes;
	onChange: ChangeEventHandler<HTMLInputElement>;
}

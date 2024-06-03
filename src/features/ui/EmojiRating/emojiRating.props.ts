import { IDefaultProps } from "@shared/types";
import { IEmojiRadioProps } from "@shared/ui/EmojiRadio/emojiRadio.props";
import { IRating } from "@entities/Review/types";

export interface IEmojiRatingProps
	extends IDefaultProps,
		Pick<IEmojiRadioProps, "onChange"> {
	value?: IRating;
}

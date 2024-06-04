import styles from "./emojiRating.module.scss";
import EmojiRadio, { EmojiTypes } from "@shared/ui/EmojiRadio";
import { IEmojiRatingProps } from "./emojiRating.props";

type EmojiKeys = keyof typeof EmojiTypes;

export default function EmojiRating({ value, onChange }: IEmojiRatingProps) {
	return (
		<fieldset className={styles.default}>
			{Object.keys(EmojiTypes).map((emojiType, idx) => {
				return (
					<EmojiRadio
						emoji={emojiType as EmojiKeys}
						checked={EmojiTypes[emojiType as EmojiKeys] === value}
						onChange={onChange}
						key={idx}
					/>
				);
			})}
		</fieldset>
	);
}

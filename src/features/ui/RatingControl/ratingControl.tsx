import { Rating } from "@features/context";
import styles from "./ratingControl.module.scss";
import { EmojiRadio } from "@shared/ui";
import { EmojiTypes } from "@shared/types";

type EmojiKeys = keyof typeof EmojiTypes;

export default function RatingControl() {
	const { value, handleChange } = Rating.useContext();

	return (
		<fieldset className={styles.default}>
			{Object.keys(EmojiTypes).map(emojiType => {
				return (
					<EmojiRadio
						emoji={emojiType as EmojiKeys}
						checked={EmojiTypes[emojiType as EmojiKeys] === value}
						onChange={handleChange}
					/>
				);
			})}
		</fieldset>
	);
}

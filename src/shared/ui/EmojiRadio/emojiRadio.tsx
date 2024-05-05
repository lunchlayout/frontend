import { IEmojiRadioProps } from "./emojiRadio.props";
import { ReactElement, SVGProps } from "react";
import styles from "./emojiRadio.module.scss";
import { EmojiTypes } from "@shared/types";

const emojiSvgs = new Map<
	keyof typeof EmojiTypes,
	ReactElement<SVGProps<SVGSVGElement>>
>([
	[
		"happy",
		<svg
			className={styles.emoji}
			viewBox="0 0 34 34"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M21.5 12.5H21.515M12.5 12.5H12.515M32 17C32 25.2842 25.2842 32 17 32C8.71572 32 2 25.2842
                        2 17C2 8.71572 8.71572 2 17 2C25.2842 2 32 8.71572 32 17ZM22.25 12.5C22.25 12.9142 21.9142 13.25
                        21.5 13.25C21.0858 13.25 20.75 12.9142 20.75 12.5C20.75 12.0858 21.0858 11.75 21.5 11.75C21.9142
                        11.75 22.25 12.0858 22.25 12.5ZM13.25 12.5C13.25 12.9142 12.9142 13.25 12.5 13.25C12.0858 13.25
                            11.75 12.9142 11.75 12.5C11.75 12.0858 12.0858 11.75 12.5 11.75C12.9142 11.75 13.25 12.0858 13.25
                            12.5ZM17 25.25C20.7507 25.25 23.75 22.5005 23.75 20H10.25C10.25 22.5005 13.2493 25.25 17 25.25Z"
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>,
	],
	[
		"good",
		<svg
			className={styles.emoji}
			viewBox="0 0 34 34"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M11 20C11 20 13.25 23 17 23C20.75 23 23 20 23 20M21.5 12.5H21.515M12.5 12.5H12.515M32
                    17C32 25.2843 25.2843 32 17 32C8.71573 32 2 25.2843 2 17C2 8.71573 8.71573 2 17 2C25.2843 2
                    32 8.71573 32 17ZM22.25 12.5C22.25 12.9142 21.9142 13.25 21.5 13.25C21.0858 13.25 20.75 12.9142
                    20.75 12.5C20.75 12.0858 21.0858 11.75 21.5 11.75C21.9142 11.75 22.25 12.0858 22.25 12.5ZM13.25
                        12.5C13.25 12.9142 12.9142 13.25 12.5 13.25C12.0858 13.25 11.75 12.9142 11.75 12.5C11.75 12.0858
                        12.0858 11.75 12.5 11.75C12.9142 11.75 13.25 12.0858 13.25 12.5Z"
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>,
	],
	[
		"normal",
		<svg
			className={styles.emoji}
			viewBox="0 0 34 34"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M11 21.5H23M21.5 12.5H21.515M12.5 12.5H12.515M32 17C32 25.2842 25.2842 32 17
                        32C8.71572 32 2 25.2842 2 17C2 8.71572 8.71572 2 17 2C25.2842 2 32 8.71572 32 17ZM22.25
                        12.5C22.25 12.9142 21.9142 13.25 21.5 13.25C21.0858 13.25 20.75 12.9142 20.75 12.5C20.75
                        12.0858 21.0858 11.75 21.5 11.75C21.9142 11.75 22.25 12.0858 22.25 12.5ZM13.25 12.5C13.25
                            12.9142 12.9142 13.25 12.5 13.25C12.0858 13.25 11.75 12.9142 11.75 12.5C11.75 12.0858 12.0858
                            11.75 12.5 11.75C12.9142 11.75 13.25 12.0858 13.25 12.5Z"
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>,
	],
	[
		"bad",
		<svg
			className={styles.emoji}
			viewBox="0 0 34 34"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M23 23C23 23 20.75 20 17 20C13.25 20 11 23 11 23M21.5 12.5H21.515M12.5 12.5H12.515M32
                    17C32 25.2843 25.2843 32 17 32C8.71573 32 2 25.2843 2 17C2 8.71573 8.71573 2 17 2C25.2843
                    2 32 8.71573 32 17ZM22.25 12.5C22.25 12.9142 21.9142 13.25 21.5 13.25C21.0858 13.25 20.75
                    12.9142 20.75 12.5C20.75 12.0858 21.0858 11.75 21.5 11.75C21.9142 11.75 22.25 12.0858 22.25
                        12.5ZM13.25 12.5C13.25 12.9142 12.9142 13.25 12.5 13.25C12.0858 13.25 11.75 12.9142 11.75
                        12.5C11.75 12.0858 12.0858 11.75 12.5 11.75C12.9142 11.75 13.25 12.0858 13.25 12.5Z"
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>,
	],
]);

export default function EmojiRadio({
	checked,
	emoji = "good",
	onChange,
}: IEmojiRadioProps) {
	return (
		<>
			<label tabIndex={0} className={styles.label} aria-label={emoji}>
				<input
					type="radio"
					checked={checked}
					value={EmojiTypes[emoji]}
					onChange={onChange}
					className={styles.ratio}
					aria-hidden="true"
					tabIndex={-1}
				/>
				{emojiSvgs.get(emoji)}
			</label>
		</>
	);
}

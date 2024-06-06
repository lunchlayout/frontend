import { IEmojiRadioProps } from "./emojiRadio.props";
import { ReactElement, SVGProps } from "react";
import styles from "./emojiRadio.module.scss";
import { EmojiTypes, EmojiRus } from "./emojiTypes";
import { Desktop } from "@shared/hoc";

const emojiSvgs = new Map<
	keyof typeof EmojiTypes,
	ReactElement<SVGProps<SVGSVGElement>>
>([
	[
		"bad",
		<svg
			className={styles.emoji}
			aria-label="bad"
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M22 22C22 22 19.75 19 16 19C12.25 19 10 22 10 22M20.5 11.5H20.515M11.5 11.5H11.515M31
			 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 
			 7.71573 31 16ZM21.25 11.5C21.25 11.9142 20.9142 12.25 20.5 12.25C20.0858 12.25 19.75 11.9142 
			 19.75 11.5C19.75 11.0858 20.0858 10.75 20.5 10.75C20.9142 10.75 21.25 11.0858 21.25 11.5ZM12.25 
			 11.5C12.25 11.9142 11.9142 12.25 11.5 12.25C11.0858 12.25 10.75 11.9142 10.75 11.5C10.75 11.0858 
			 11.0858 10.75 11.5 10.75C11.9142 10.75 12.25 11.0858 12.25 11.5Z"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>,
	],
	[
		"normal",
		<svg
			className={styles.emoji}
			aria-label="normal"
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10 20.5H22M20.5 11.5H20.515M11.5 11.5H11.515M31 16C31 24.2842 24.2842 31 16 31C7.71572 
			31 1 24.2842 1 16C1 7.71572 7.71572 1 16 1C24.2842 1 31 7.71572 31 16ZM21.25 11.5C21.25 11.9142 
			20.9142 12.25 20.5 12.25C20.0858 12.25 19.75 11.9142 19.75 11.5C19.75 11.0858 20.0858 10.75 20.5 
			10.75C20.9142 10.75 21.25 11.0858 21.25 11.5ZM12.25 11.5C12.25 11.9142 11.9142 12.25 11.5 12.25C11.0858 
			12.25 10.75 11.9142 10.75 11.5C10.75 11.0858 11.0858 10.75 11.5 10.75C11.9142 10.75 12.25 11.0858 12.25 
			11.5Z"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>,
	],
	[
		"good",
		<svg
			className={styles.emoji}
			aria-label="good"
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10 19C10 19 12.25 22 16 22C19.75 22 22 19 22 19M20.5 11.5H20.515M11.5 11.5H11.515M31 
			16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 
			7.71573 31 16ZM21.25 11.5C21.25 11.9142 20.9142 12.25 20.5 12.25C20.0858 12.25 19.75 11.9142 19.75 
			11.5C19.75 11.0858 20.0858 10.75 20.5 10.75C20.9142 10.75 21.25 11.0858 21.25 11.5ZM12.25 11.5C12.25 
			11.9142 11.9142 12.25 11.5 12.25C11.0858 12.25 10.75 11.9142 10.75 11.5C10.75 11.0858 11.0858 10.75 
			11.5 10.75C11.9142 10.75 12.25 11.0858 12.25 11.5Z"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>,
	],
	[
		"happy",
		<svg
			className={styles.emoji}
			aria-label="happy"
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M20.5 11.5H20.515M11.5 11.5H11.515M31 16C31 24.2842 24.2842 31 16 31C7.71572 31 1 24.2842 1 
			16C1 7.71572 7.71572 1 16 1C24.2842 1 31 7.71572 31 16ZM21.25 11.5C21.25 11.9142 20.9142 12.25 20.5 
			12.25C20.0858 12.25 19.75 11.9142 19.75 11.5C19.75 11.0858 20.0858 10.75 20.5 10.75C20.9142 10.75 21.25 
			11.0858 21.25 11.5ZM12.25 11.5C12.25 11.9142 11.9142 12.25 11.5 12.25C11.0858 12.25 10.75 11.9142 10.75 
			11.5C10.75 11.0858 11.0858 10.75 11.5 10.75C11.9142 10.75 12.25 11.0858 12.25 11.5ZM16 24.25C19.7507 
			24.25 22.75 21.5005 22.75 19H9.25C9.25 21.5005 12.2493 24.25 16 24.25Z"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>,
	],
]);

export default function EmojiRadio({
	emoji = "good",
	...props
}: IEmojiRadioProps) {
	return (
		<div className={[styles.default, styles[emoji]].join(" ")}>
			<label tabIndex={0} className={styles.emojiContainer}>
				<input
					id={emoji}
					type="radio"
					value={EmojiTypes[emoji]}
					className={styles.radio}
					aria-hidden="true"
					tabIndex={-1}
					{...props}
				/>
				{emojiSvgs.get(emoji)}
			</label>
			<label htmlFor={emoji} className={styles.description}>
				<span>{EmojiRus[emoji]}</span>
				<Desktop>
					<span>{EmojiTypes[emoji] + "/" + emojiSvgs.size}</span>
				</Desktop>
			</label>
		</div>
	);
}

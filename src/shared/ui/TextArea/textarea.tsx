import { ITextAreaProps } from "./textarea.props";
import styles from "./textarea.module.scss";
import { ChangeEvent } from "react";

export default function TextArea({
	label,
	className = "",
	onChange,
	value,
	...props
}: ITextAreaProps) {
	function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
		onChange && onChange(e);
		const MAX_HEIGHT = 160;
		const textArea = e.target;

		if (textArea.clientHeight < MAX_HEIGHT) {
			textArea.style.height = textArea.scrollHeight + "px";
		}
	}
	return (
		<div
			className={[
				styles.container,
				value && styles.hasContent,
				className,
			].join(" ")}
		>
			<textarea
				className={styles.default}
				onChange={handleChange}
				value={value}
				{...props}
			/>
			{label && <span className={styles.label}>{label}</span>}
		</div>
	);
}

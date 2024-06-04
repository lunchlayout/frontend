import { IQuizOptionProps } from "./quizOption.props";
import styles from "./quizOption.module.scss";

export default function QuizOption({
	type = "default",
	checked = false,
	option,
	onChange,
	disabled = false,
}: IQuizOptionProps) {
	return (
		<label
			tabIndex={disabled ? -1 : 0}
			className={[styles.option, styles[type]].join(" ")}
		>
			<input
				type="radio"
				checked={checked}
				onChange={onChange}
				className={styles.ratio}
				aria-hidden="true"
				tabIndex={-1}
				name={option}
				disabled={disabled}
			/>
			{option}
		</label>
	);
}

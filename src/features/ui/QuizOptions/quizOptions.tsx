import { IQuizOptionsProps } from "./quizOptions.props";
import styles from "./quizOptions.module.scss";
import QuizOption from "../QuizOption/quizOption";
import { Quiz, QuizResult } from "@features/context";
import { QuizOptionType } from "@features/ui/QuizOption";

export default function QuizOptions({
	options,
	disabled = false,
	className = "",
}: IQuizOptionsProps) {
	const { value, handleChange } = Quiz.useContext();
	const { answer, isFinish } = QuizResult.useContext();

	function getOptionType(option: string): QuizOptionType {
		if (isFinish) {
			if (answer === option) return "correct";
			else if (value === option) return "wrong";
		}
		return "default";
	}

	return (
		<fieldset className={[styles.default, className].join(" ")}>
			{options.map(option => {
				return (
					<QuizOption
						disabled={disabled}
						label={option}
						onChange={handleChange}
						checked={!isFinish && value === option}
						type={getOptionType(option)}
					/>
				);
			})}
		</fieldset>
	);
}

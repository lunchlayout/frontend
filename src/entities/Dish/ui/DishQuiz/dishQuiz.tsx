import { IDishQuizProps } from "./dishQuiz.props";
import styles from "./dishQuiz.module.scss";
import { FormEvent, useState } from "react";
import { Quiz, QuizResult } from "@features/context";
import { QuizOptions } from "@features/ui";
import { Button } from "@shared/ui";

export default function DishQuiz({
	answer,
	options,
	question,
	className = "",
}: IDishQuizProps) {
	const [isFinish, setIsFinish] = useState(false);
	const [currentOption, setCurrentOption] = useState<string>("");
	function sendOption(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsFinish(true);
	}

	return (
		<form
			onSubmit={sendOption}
			className={[styles.default, className].join(" ")}
		>
			<p className={styles.question}>{question}</p>
			<QuizResult.Context.Provider
				value={{
					answer,
					isFinish,
				}}
			>
				<Quiz.Context.Provider
					value={{
						value: currentOption,
						handleChange: e => setCurrentOption(e.target.name),
					}}
				>
					<QuizOptions
						disabled={isFinish}
						className={styles.options}
						options={options}
					/>
				</Quiz.Context.Provider>
			</QuizResult.Context.Provider>
			<Button customType="primary" type="submit" disabled={isFinish}>
				Ответить
			</Button>
		</form>
	);
}

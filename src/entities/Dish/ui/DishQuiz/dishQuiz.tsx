import { IDishQuizProps } from "./dishQuiz.props";
import styles from "./dishQuiz.module.scss";
import { FormEvent, useState } from "react";
import { Quiz, QuizResult } from "@features/context";
import QuizOptions from "@features/ui/QuizOptions";
import Button from "@shared/ui/Button";
import Image from "@shared/ui/Image";
import { Desktop } from "@shared/hoc";

export default function DishQuiz({
	answer,
	options,
	question,
	className = "",
}: IDishQuizProps) {
	const [isFinish, setIsFinish] = useState(false);
	const [currentOption, setCurrentOption] = useState("");

	function sendOption(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsFinish(true);
	}

	return (
		<article className={[styles.default, className].join(" ")}>
			<Desktop>
				<Image src="/images/quizGirl.png" width={150} />
			</Desktop>
			<form onSubmit={sendOption} className={styles.form}>
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
				<Button
					className={styles.btn}
					customType="filled"
					type="submit"
					disabled={isFinish}
				>
					Ответить
				</Button>
			</form>
		</article>
	);
}

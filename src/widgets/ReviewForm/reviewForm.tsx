import { CommentSection, RatingSection } from "@entities/Review/ui";
import styles from "./reviewForm.module.scss";
import { FormEvent, useState } from "react";
import { IRating } from "@entities/Review/types";
import { Comment, Rating } from "@features/context";
import { api } from "@entities/Review";
import { FORM_ID } from "./consts";

export default function ReviewForm() {
	const [rating, setRating] = useState<IRating>();
	const [comment, SetComment] = useState("");

	async function sendReview(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (rating) {
			await api.sendReview({ rating, comment });
		}
	}

	return (
		<form id={FORM_ID} className={styles.default} onSubmit={sendReview}>
			<Rating.Context.Provider
				value={{
					value: rating,
					handleChange: e => setRating(+e.target.value as IRating),
				}}
			>
				<RatingSection />
			</Rating.Context.Provider>
			<Comment.Context.Provider
				value={{
					value: comment,
					handleChange: e => SetComment(e.target.value),
				}}
			>
				<CommentSection />
			</Comment.Context.Provider>
		</form>
	);
}

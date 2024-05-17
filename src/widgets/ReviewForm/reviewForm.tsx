import { CommentSection, RatingSection } from "@entities/Review/ui";
import styles from "./reviewForm.module.scss";
import { FormEvent, useState } from "react";
import { IRating } from "@entities/Review/types";
import { Comment, Notice, Rating } from "@features/context";
import { api } from "@entities/Review";
import { FORM_ID } from "./consts";
import { IReviewFormProps } from "./reviewForm.props";
import { CircularLoader, FormControl } from "@shared/ui";
import { useImmer } from "use-immer";
import { INoticeState } from "@shared/ui/SnackbarNotice";
import { SnackbarNotices } from "@features/ui";

export default function ReviewForm({ hasControl = false }: IReviewFormProps) {
	const [rating, setRating] = useState<IRating>();
	const [comment, setComment] = useState("");

	const [isLoading, setIsLoading] = useState(false);
	const [notices, setNotices] = useImmer<INoticeState[]>([]);

	async function sendReview(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (rating) {
			setIsLoading(true);
			await api.sendReview({ rating, comment });

			resetForm();
			setNotices(draft => {
				draft.push({
					id: draft.length + 1,
					isOpen: true,
					severity: "success",
					text: "Отзыв отправлен!",
				});
			});
			setIsLoading(false);
		} else {
			setNotices(draft => {
				draft.push({
					id: draft.length + 1,
					isOpen: true,
					severity: "warning",
					text: "Поставьте оценку для отправки отзыва",
				});
			});
		}
	}

	function resetForm() {
		setRating(undefined);
		setComment("");
	}
	return (
		<>
			<form
				id={FORM_ID}
				className={styles.default}
				onSubmit={sendReview}
				onReset={resetForm}
			>
				<Rating.Context.Provider
					value={{
						value: rating,
						handleChange: e =>
							setRating(+e.target.value as IRating),
					}}
				>
					<RatingSection />
				</Rating.Context.Provider>
				<Comment.Context.Provider
					value={{
						value: comment,
						handleChange: e => setComment(e.target.value),
					}}
				>
					<CommentSection />
				</Comment.Context.Provider>
				{hasControl && <FormControl />}
			</form>
			<CircularLoader open={isLoading} />
			<Notice.Context.Provider value={{ notices, setNotices }}>
				<SnackbarNotices />
			</Notice.Context.Provider>
		</>
	);
}

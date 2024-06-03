import styles from "./reviewForm.module.scss";
import { FormEvent, useState } from "react";
import { IRating } from "@entities/Review/types";
import { Notice } from "@features/context";
import { api } from "@entities/Review";
import { FORM_ID } from "./consts";
import { IReviewFormProps } from "./reviewForm.props";
import { CircularLoader, FormControl, TextArea } from "@shared/ui";
import { useImmer } from "use-immer";
import { INoticeState } from "@shared/ui/SnackbarNotice";
import { EmojiRating, SnackbarNotices } from "@features/ui";
import { ReviewSubmissionSuccess } from "@entities/Review/ui";

export default function ReviewForm({
	hasControl = true,
	className = "",
}: IReviewFormProps) {
	const [rating, setRating] = useState<IRating>();
	const [comment, setComment] = useState("");
	const [isSuccess, setIsSuccess] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const [notices, setNotices] = useImmer<INoticeState[]>([]);

	async function sendReview(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (rating) {
			setIsLoading(true);
			await api.sendReview({ rating, comment });
			setIsSuccess(true);
			resetForm();
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
			{!isSuccess && (
				<section className={[styles.default, className].join(" ")}>
					<div className={styles.titleContainer}>
						<span className={styles.title}>Обратная связь</span>
						<span className={styles.description}>
							Напишите свой отзыв, чтобы мы стали лучше!
						</span>
					</div>
					<form
						id={FORM_ID}
						className={styles.form}
						onSubmit={sendReview}
						onReset={resetForm}
					>
						<div className={styles.inputContainer}>
							<EmojiRating
								value={rating}
								onChange={e =>
									setRating(+e.target.value as IRating)
								}
							/>
							<TextArea
								placeholder="Напишите отзыв сюда"
								label="Отзыв"
								value={comment}
								onChange={e => setComment(e.target.value)}
							/>
						</div>
						{hasControl && (
							<FormControl className={styles.controller} />
						)}
					</form>
				</section>
			)}
			{isSuccess && <ReviewSubmissionSuccess className={className} />}
			<CircularLoader open={isLoading} />
			<Notice.Context.Provider value={{ notices, setNotices }}>
				<SnackbarNotices />
			</Notice.Context.Provider>
		</>
	);
}

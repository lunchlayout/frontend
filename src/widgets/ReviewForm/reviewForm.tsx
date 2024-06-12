import styles from "./reviewForm.module.scss";
import { FormEvent, useState } from "react";
import { IRating } from "@entities/Review/types";
import { api } from "@entities/Review";
import { IReviewFormProps } from "./reviewForm.props";
import {
	CircularLoader,
	FormControl,
	SnackbarNoticeList,
	TextArea,
} from "@shared/ui";
import { EmojiRating } from "@features/ui";
import { ReviewSubmissionSuccess } from "@entities/Review/ui";
import { useNotices } from "@shared/hook";

export default function ReviewForm({
	hasControl = true,
	className = "",
}: IReviewFormProps) {
	const [rating, setRating] = useState<IRating>();
	const [comment, setComment] = useState("");
	const [isSuccess, setIsSuccess] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const { addNotice, deleteNotice, toggleNotice, notices } = useNotices();

	async function sendReview(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (rating) {
			try {
				setIsLoading(true);
				await api.sendReview({ rating, comment });
				setIsSuccess(true);
				resetForm();
				setIsLoading(false);
			} catch (error) {
				addNotice({
					severity: "warning",
					text: "Ошибка сервера",
				});
				setIsLoading(false);
			}
		} else {
			addNotice({
				severity: "warning",
				text: "Поставьте оценку для отправки отзыва",
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
			<CircularLoader open={isLoading} hasBackdrop />
			<SnackbarNoticeList
				onClose={deleteNotice}
				toggleOpen={toggleNotice}
				notices={notices}
			/>
		</>
	);
}

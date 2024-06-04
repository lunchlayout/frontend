import { Link } from "@shared/ui";
import styles from "./reviewSubmissionSuccess.module.scss";
import { Image } from "@shared/ui";
import { IReviewSubmissionSuccessProps } from "./reviewSubmissionSuccess.props";

export default function ReviewSubmissionSuccess({
	className = "",
}: IReviewSubmissionSuccessProps) {
	return (
		<section className={[styles.default, className].join(" ")}>
			<Image
				src="/images/reviewSubmissionPeople.png"
				width={380}
				alt=""
				className={styles.image}
			/>
			<div className={styles.content}>
				<div className={styles.description}>
					<span className={styles.submissionSuccess}>
						Отзыв успешно отправлен!
					</span>
					<span>Спасибо, что делаете нас лучше</span>
				</div>
				<Link to="/" type="outlined" className={styles.link}>
					Вернуться на главную
				</Link>
			</div>
		</section>
	);
}

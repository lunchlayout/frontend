import { Image, Link } from "@shared/ui";
import styles from "./notFoundPageContent.module.scss";

export default function NotFoundPageContent() {
	return (
		<section className={styles.default}>
			<Image
				src="/images/404Robot.png"
				width={360}
				alt=""
				className={styles.image}
			/>
			<div className={styles.content}>
				<div className={styles.description}>
					<span className={styles.oops}>Упс!</span>
					<span>Такой страницы не существует</span>
				</div>
				<Link to="/" type="outlined" className={styles.link}>
					На главную
				</Link>
			</div>
		</section>
	);
}

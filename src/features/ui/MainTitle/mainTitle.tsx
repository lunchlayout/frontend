import { Title } from "@shared/ui";
import styles from "./mainTitle.module.scss";

export default function MainTitle() {
	return (
		<div className={styles.default}>
			<Title className={styles.upperText} level={1}>
				Lunch Layout — <br />
				<span className={styles.lowerText}>
					ваше виртуальное путешествие в мир изысканных блюд
				</span>
			</Title>
		</div>
	);
}

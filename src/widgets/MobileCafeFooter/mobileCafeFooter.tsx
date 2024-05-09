import { ReviewTextLink } from "@entities/Review/ui";
import styles from "./mobileCafeFooter.module.scss";

export default function MobileCafeFooter() {
	return (
		<footer className={styles.default}>
			<ReviewTextLink />
		</footer>
	);
}

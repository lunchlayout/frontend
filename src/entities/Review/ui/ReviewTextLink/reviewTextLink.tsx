import styles from "./reviewTextLink.module.scss";
import ReviewLink from "../ReviewLink";
import { Link } from "@shared/ui";

export default function ReviewTextLink() {
	return (
		<div className={styles.default}>
			<Link to="/reviews">Оставьте ваш отзыв</Link>
			<ReviewLink />
		</div>
	);
}

import { ReviewTextLink } from "@entities/Review/ui";
import styles from "./mobileCafeControl.module.scss";

export default function MobileCafeControl() {
	return (
		<div className={styles.default}>
			<ReviewTextLink />
		</div>
	);
}

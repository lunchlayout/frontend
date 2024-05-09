import { FormControl } from "@shared/ui";
import styles from "./mobileReviewFooter.module.scss";
import { FORM_ID } from "@widgets/ReviewForm";

export default function MobileReviewFooter() {
	return (
		<footer className={styles.default}>
			<FormControl formId={FORM_ID} />
		</footer>
	);
}

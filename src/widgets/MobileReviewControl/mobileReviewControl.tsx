import { FormControl } from "@shared/ui";
import styles from "./mobileReviewControl.module.scss";
import { FORM_ID } from "@widgets/ReviewForm";

export default function MobileReviewControl() {
	return (
		<div className={styles.default}>
			<FormControl formId={FORM_ID} className={styles.formControl} />
		</div>
	);
}

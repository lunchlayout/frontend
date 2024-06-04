import { IFormControlProps } from "./formControl.props";
import styles from "./formControl.module.scss";

import { Button } from "@shared/ui";

export default function FormControl({
	className = "",
	formId,
	resetDisabled = false,
	submitDisabled = false,
}: IFormControlProps) {
	return (
		<div className={[styles.default, className].join(" ")}>
			<Button
				formId={formId}
				customType="outlined"
				type="reset"
				disabled={resetDisabled}
			>
				Сбросить
			</Button>
			<Button
				formId={formId}
				customType="filled"
				type="submit"
				disabled={submitDisabled}
			>
				Отправить
			</Button>
		</div>
	);
}

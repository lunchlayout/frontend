import { IFormControlProps } from "./formControl.props";
import styles from "./formControl.module.scss";

import { Button } from "@shared/ui";

export default function FormControl({
	className = "",
	resetDisabled = false,
	submitDisabled = false,
}: IFormControlProps) {
	return (
		<div className={[styles.default, className].join(" ")}>
			<Button customType="outlined" type="reset" disabled={resetDisabled}>
				Сбросить
			</Button>
			<Button customType="filled" type="submit" disabled={submitDisabled}>
				Отправить
			</Button>
		</div>
	);
}

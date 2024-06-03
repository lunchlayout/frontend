import { ICloseButtonProps } from "./closeButton.props";
import styles from "./closeButton.module.scss";

import { Button } from "@shared/ui";

export default function CloseButton({
	className = "",
	...props
}: ICloseButtonProps) {
	return (
		<Button className={[styles.default, className].join(" ")} {...props}>
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1.16016 18.8375L18.8402 1.16248M1.16016 1.16248L18.8402 18.8375"
					stroke-width="2"
					stroke-linecap="round"
				/>
			</svg>
		</Button>
	);
}

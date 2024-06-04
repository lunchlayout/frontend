import { IButtonControllerProps } from "./buttonController.props";
import styles from "./buttonController.module.scss";

import { Button } from "@shared/ui";

export default function ButtonController({
	direction = "right",
	className = "",
	...props
}: IButtonControllerProps) {
	return (
		<Button
			customType="filled"
			className={[styles.default, className].join(" ")}
			{...props}
		>
			<svg
				width="28"
				height="15"
				viewBox="0 0 28 15"
				fill="none"
				className={styles[direction]}
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1 8.5C0.447715 8.5 0 8.05228 0 7.5C0 6.94772 0.447715 6.5 1 6.5L1 8.5ZM27.7071 6.79289C28.0976
				 7.18342 28.0976 7.81658 27.7071 8.20711L21.3431 14.5711C20.9526 14.9616 20.3195 14.9616 19.9289 14.5711C19.5384
				  14.1805 19.5384 13.5474 19.9289 13.1569L25.5858 7.5L19.9289 1.84315C19.5384 1.45262 19.5384 0.819456 19.9289
				   0.428932C20.3195 0.0384079 20.9526 0.0384079 21.3431 0.428932L27.7071 6.79289ZM1 6.5L27 6.5V8.5L1 8.5L1 6.5Z"
				/>
			</svg>
		</Button>
	);
}

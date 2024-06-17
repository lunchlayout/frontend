import { IBurgerButtonProps } from "./burgerButton.props";
import styles from "./burgerButton.module.scss";

import { Button } from "@shared/ui";

export default function BurgerButton({
	className = "",
	...props
}: IBurgerButtonProps) {
	return (
		<Button
			customType="outlined"
			className={[styles.default, className].join(" ")}
			{...props}
		>
			<svg
				width="26"
				height="20"
				viewBox="0 0 26 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M1.66683 0.666706C1.31321 0.666706 0.974068 
				0.807182 0.72402 1.05723C0.473971 1.30728 0.333495 1.64642 0.333495 2.00004C0.333495 2.35366 
				0.473971 2.6928 0.72402 2.94285C0.974068 3.1929 1.31321 3.33337 1.66683 3.33337L24.3335 
				3.33337C24.6871 3.33337 25.0263 3.1929 25.2763 2.94285C25.5264 2.6928 25.6668 2.35366 
				25.6668 2.00004C25.6668 1.64642 25.5264 1.30728 25.2763 1.05723C25.0263 0.807181 24.6871 
				0.666705 24.3335 0.666705L1.66683 0.666706ZM0.333496 10C0.333496 9.64642 0.473971 9.30728 
				0.72402 9.05723C0.974068 8.80718 1.31321 8.66671 1.66683 8.66671L24.3335 8.66671C24.6871 
				8.66671 25.0263 8.80718 25.2763 9.05723C25.5264 9.30728 25.6668 9.64642 25.6668 10C25.6668 
				10.3537 25.5264 10.6928 25.2763 10.9428C25.0263 11.1929 24.6871 11.3334 24.3335 11.3334L1.66683 
				11.3334C1.31321 11.3334 0.974068 11.1929 0.72402 10.9428C0.473971 10.6928 0.333496 10.3537 
				0.333496 10ZM0.333496 18C0.333496 17.6464 0.473972 17.3073 0.72402 17.0572C0.974069 16.8072 
				1.31321 16.6667 1.66683 16.6667L24.3335 16.6667C24.6871 16.6667 25.0263 16.8072 25.2763 
				17.0572C25.5264 17.3073 25.6668 17.6464 25.6668 18C25.6668 18.3537 25.5264 18.6928 25.2763 
				18.9428C25.0263 19.1929 24.6871 19.3334 24.3335 19.3334L1.66683 19.3334C1.31321 19.3334 0.974069 
				19.1929 0.72402 18.9428C0.473972 18.6928 0.333496 18.3537 0.333496 18Z"
				/>
			</svg>
		</Button>
	);
}
import { IPLayButtonProps } from "./playButton.props";
import styles from "./playButton.module.scss";
import { Button } from "@shared/ui";

export default function PlayButton({ className = "" }: IPLayButtonProps) {
	return (
		<Button className={[styles.default, className].join(" ")}>
			<svg
				width="15"
				height="20"
				viewBox="0 0 15 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0.0267506 1.00155V19.0016C0.0273219 19.1838 0.0775851 19.3624 0.172129 19.5182C0.266672 19.674
				 0.401915 19.8011 0.563303 19.8857C0.724691 19.9704 0.906111 20.0094 1.08803 19.9987C1.26996 19.9879
				  1.44549 19.9277 1.59575 19.8246L14.5958 10.8246C15.1348 10.4516 15.1348 9.55355 14.5958 9.17955L1.59575
				   0.17955C1.44581 0.0753751 1.27018 0.0142844 1.08796 0.00291549C0.90573 -0.00845348 0.723873 0.0303342
				    0.562143 0.115064C0.400414 0.199794 0.264997 0.327226 0.170607 0.483514C0.0762164 0.639803 0.026463
					 0.81897 0.0267506 1.00155Z"
				/>
			</svg>
		</Button>
	);
}

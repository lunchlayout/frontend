import styles from "./noResultsFound.module.scss";
import { INoResultsFoundProps } from "./noResultsFound.props";
import { Image } from "@shared/ui";

export default function NoResultsFound({
	label,
	className = "",
}: INoResultsFoundProps) {
	return (
		<section className={[styles.default, className].join(" ")}>
			<Image
				src="/images/noResultsFoundDelivery.png"
				width={200}
				alt=""
				className={styles.image}
			/>
			<span className={styles.label}>{label}</span>
		</section>
	);
}

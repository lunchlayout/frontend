import { ICafeCardProps } from "./cafeCard.props";
import styles from "./cafeCard.module.scss";
import { CafeLogo } from "@entities/Cafe/ui";

export default function CafeCard({ className = "", ...cafe }: ICafeCardProps) {
	return (
		<article
			className={[styles.default, className].join(" ")}
			itemScope
			itemType="https://schema.org/Restaurant"
		>
			<CafeLogo {...cafe} width={110} className={styles.logo} />
			<span className={styles.cafeName} itemProp="name">
				{cafe.name}
			</span>
		</article>
	);
}

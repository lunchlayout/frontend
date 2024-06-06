import { ICafeInfoProps } from "./cafeInfo.props";
import styles from "./cafeInfo.module.scss";
import { CafeLogo } from "@entities/Cafe/ui";

export default function CafeInfo({ className = "", ...cafe }: ICafeInfoProps) {
	return (
		<article
			className={[styles.default, className].join(" ")}
			itemScope
			itemType="https://schema.org/Restaurant"
		>
			<span className={styles.cafeName} itemProp="name">
				{cafe.name}
			</span>
			<CafeLogo {...cafe} width={90} />
		</article>
	);
}

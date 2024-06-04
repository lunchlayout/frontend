import { ICafeInfoProps } from "./cafeInfo.props";
import styles from "./cafeInfo.module.scss";
import { CafeLogo } from "@entities/Cafe/ui";

export default function CafeInfo({ className = "", ...cafe }: ICafeInfoProps) {
	return (
		<article className={[styles.default, className].join(" ")}>
			<span className={styles.cafeName}>{cafe.name}</span>
			<CafeLogo {...cafe} width={90} />
		</article>
	);
}

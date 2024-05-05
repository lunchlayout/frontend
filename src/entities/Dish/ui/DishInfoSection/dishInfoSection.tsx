import { IDishInfoSectionProps } from "./dishInfoSection.props";
import styles from "./dishInfoSection.module.scss";

export default function DishInfoSection({
	label,
	children,
	className = "",
}: IDishInfoSectionProps) {
	return (
		<section className={[styles.default, className].join(" ")}>
			<span className={styles.label}>{label}</span>
			<div className={styles.content}>{children}</div>
		</section>
	);
}

import styles from "./benefitCard.module.scss";
import { IBenefitCardProps } from "./benefitCard.props";
import { Title } from "@shared/ui";

export default function BenefitCard({
	title,
	description,
	icon,
	className = "",
}: IBenefitCardProps) {
	return (
		<article className={[styles.default, className].join(" ")}>
			{icon}
			<Title level={2} className={styles.title}>
				{title}
			</Title>
			<p className={styles.description}>{description}</p>
		</article>
	);
}

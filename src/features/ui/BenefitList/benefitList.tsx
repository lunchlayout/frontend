import BenefitCard from "../BenefitCard";
import styles from "./benefitList.module.scss";
import { BenefitContent } from "./benefitContent";
import { IBenefitListProps } from "./benefitList.props";

export default function BenefitList({ className = "" }: IBenefitListProps) {
	return (
		<ul className={[styles.default, className].join(" ")}>
			{BenefitContent.map((benefit, idx) => {
				return (
					<li key={idx}>
						<BenefitCard {...benefit} />
					</li>
				);
			})}
		</ul>
	);
}

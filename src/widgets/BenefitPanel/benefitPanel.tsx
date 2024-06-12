import BenefitList from "@features/ui/BenefitList";
import styles from "./benefitPanel.module.scss";
import { Image } from "@shared/ui/";
import { IBenefitPanelProps } from "./benefitPanel.props";

export default function BenefitPanel({ className = "" }: IBenefitPanelProps) {
	return (
		<section className={[styles.default, className].join(" ")}>
			<Image src="/images/benefitsLaptop.png" alt="" />
			<BenefitList />
		</section>
	);
}

import { IFormSectionProps } from "./formSection.props";
import styles from "./formSection.module.scss";
import Title from "../Title";

export default function FormSection({ title, children }: IFormSectionProps) {
	return (
		<section className={styles.default}>
			<Title level={3}>{title}</Title>
			{children}
		</section>
	);
}

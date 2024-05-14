import { Title } from "@shared/ui";
import styles from "./sendDishIdPanel.module.scss";
import { DishIdForm } from "@features/ui";
import { ISendDishIdPanelProps } from "./sendDishIdPanel.props";

export default function SendDishIdPanel({
	className = "",
}: ISendDishIdPanelProps) {
	return (
		<section className={[styles.default, className].join(" ")}>
			<Title level={2}>Просмотр любого блюда у вас на столе</Title>
			<DishIdForm />
		</section>
	);
}

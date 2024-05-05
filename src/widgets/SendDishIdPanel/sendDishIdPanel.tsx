import { Title } from "@shared/ui";
import styles from "./sendDishIdPanel.module.scss";
import { DishIdForm } from "@features/ui";

export default function SendDishIdPanel() {
	return (
		<section className={styles.default}>
			<Title level={2}>Просмотр любого блюда у вас на столе</Title>
			<DishIdForm />
		</section>
	);
}

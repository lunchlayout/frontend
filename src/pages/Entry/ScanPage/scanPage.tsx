import { DishIdQRReader } from "@widgets/index";
import styles from "./scanPage.module.scss";
import { Helmet } from "react-helmet";

export default function ScanPage() {
	return (
		<main className={styles.default}>
			<DishIdQRReader />
			<Helmet
				title={`Сканер QR-кода блюда — Lunch Layout`}
				meta={[
					{
						name: "description",
						content: "Страница сканирования QR-кода блюда",
					},
				]}
			/>
		</main>
	);
}

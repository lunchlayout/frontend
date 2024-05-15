import { SEO } from "@shared/ui";
import { DishIdQRReader } from "@widgets/index";
import styles from "./scanPage.module.scss";

export default function ScanPage() {
	return (
		<main className={styles.main}>
			<DishIdQRReader />
			<SEO title={`Сканер QR-кода блюда — Lunch Layout`} />
		</main>
	);
}

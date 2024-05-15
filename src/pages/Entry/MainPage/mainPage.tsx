import { Desktop, Mobile } from "@shared/hoc";
import { SEO } from "@shared/ui";
import { DesktopMain, SendDishIdPanel } from "@widgets/index";
import styles from "./mainPage.module.scss";

export default function MainPage() {
	return (
		<>
			<Desktop>
				<DesktopMain
					className={[styles.main, styles.desktopMain].join(" ")}
				/>
			</Desktop>
			<Mobile>
				<main className={styles.main}>
					<div className={styles.content}>
						<SendDishIdPanel />
					</div>
				</main>
			</Mobile>
			<SEO title={`Lunch Layout`} />
		</>
	);
}

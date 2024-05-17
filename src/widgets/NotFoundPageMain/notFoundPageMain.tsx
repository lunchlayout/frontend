import { DishIcon } from "@entities/Dish/ui";
import { Link, Title } from "@shared/ui";
import { INotFoundPageMainProps } from "./notFoundPageMain.props";
import styles from "./notFoundPageMain.module.scss";

export default function NotFoundPageMain({
	className = "",
}: INotFoundPageMainProps) {
	return (
		<main className={className}>
			<div className={styles.content}>
				<DishIcon />
				<div className={styles.info}>
					<Title level={1} className={styles.title}>
						Страница не найдена
					</Title>
					<p className={styles.description}>
						Кажется, вы попали на несуществующую страницу. Мы
						приносим извинения за неудобства.Чтобы вернуться на
						главную страницу, нажмите
						<Link to="/" className={styles.link}>
							здесь
						</Link>
						.
					</p>
				</div>
			</div>
		</main>
	);
}

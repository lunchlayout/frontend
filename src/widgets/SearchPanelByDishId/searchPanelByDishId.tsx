import { Title } from "@shared/ui";
import styles from "./searchPanelByDishId.module.scss";
import { SearchDishByIdForm } from "@features/ui";
import { ISearchPanelByDishIdProps } from "./searchPanelByDishId.props";

export default function SearchPanelByDishId({
	className = "",
}: ISearchPanelByDishIdProps) {
	return (
		<section className={[styles.default, className].join(" ")}>
			<Title className={styles.title} level={1}>
				Отправься в виртуальное путешествие, открывая мир разных
				кулинарных удовольствий
			</Title>
			<SearchDishByIdForm className={styles.form} />
		</section>
	);
}

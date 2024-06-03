import { Link, NavLink } from "@shared/ui";
import styles from "./commonNavigation.module.scss";
import { ICommonNavigationProps } from "./commonNavigation.props";
import { BASE_URL as REVIEW_BASE_URL } from "@entities/Review/consts";
import { BASE_URL as CAFE_BASE_URL } from "@entities/Cafe/consts";

export default function CommonNavigation({
	className = "",
}: ICommonNavigationProps) {
	return (
		<>
			<nav className={className}>
				<ul className={styles.links}>
					<li>
						<NavLink to={CAFE_BASE_URL}>Рестораны</NavLink>
					</li>
					<li>
						<NavLink to={REVIEW_BASE_URL}>Обратная связь</NavLink>
					</li>
					<li>
						<NavLink to={"/scan"}>Сканировать QR</NavLink>
					</li>
					<li>
						<Link to="/" type="outlined">
							Найти блюдо
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

import { Button, NavLink } from "@shared/ui";
import styles from "./dishNavigation.module.scss";
import { useSelector } from "react-redux";
import { selectors } from "@entities/Dish";
import { useModal } from "@shared/hook";
import { getCafePathById } from "@entities/Cafe/lib";
import { DishInfoModal } from "@entities/Dish/ui";
import { IDishNavigationProps } from "./dishNavigation.props";
import { BASE_URL as REVIEW_BASE_URL } from "@entities/Review/consts";
import { BASE_URL as CAFE_BASE_URL } from "@entities/Cafe/consts";

export default function DishNavigation({
	className = "",
}: IDishNavigationProps) {
	const dishCafe = useSelector(selectors.dishCafe);
	const { isShown, open, close } = useModal();
	if (!dishCafe) return null;
	const cafePath = getCafePathById(dishCafe.cafeId);

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
						<NavLink to={cafePath}>Блюда ресторана</NavLink>
					</li>
					<li>
						<Button customType="filled" onClick={open}>
							О блюде
						</Button>
					</li>
				</ul>
			</nav>
			<DishInfoModal isOpen={isShown} onClose={close} />
		</>
	);
}

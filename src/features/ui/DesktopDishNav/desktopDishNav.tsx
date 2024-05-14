import { Button, NavLink } from "@shared/ui";
import styles from "./desktopDishNav.module.scss";
import { useSelector } from "react-redux";
import { selectors } from "@entities/Dish";
import { useModal } from "@shared/hook";
import { getCafePathById } from "@entities/Cafe/lib";
import { DishInfoModal } from "@entities/Dish/ui";
import { IDesktopDishNavProps } from "./desktopDishNav.props";

export default function DesktopDishNav({
	className = "",
}: IDesktopDishNavProps) {
	const dish = useSelector(selectors.dish);
	const { isShown, open, close } = useModal();
	if (!dish) return null;
	const cafePath = getCafePathById(dish.cafe.cafeId);

	return (
		<>
			<nav className={className}>
				<ul className={styles.links}>
					<li>
						<NavLink to={cafePath}>Блюда ресторана</NavLink>
					</li>
					<li>
						<Button customType="secondary" onClick={open}>
							О блюде
						</Button>
					</li>
				</ul>
			</nav>
			<DishInfoModal isOpen={isShown} onClose={close} />
		</>
	);
}

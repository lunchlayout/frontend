import { Button, NavLink } from "@shared/ui";
import styles from "./desktopDishNav.module.scss";
import { useSelector } from "react-redux";
import { selectors } from "@entities/Dish";
import { IDishWithCafeId } from "@entities/Dish/types";
import { useModal } from "@shared/hook";
import { getCafePathById } from "@entities/Cafe/lib";
import { DishInfoModal } from "@entities/Dish/ui";
import { IDesktopDishNavProps } from "./desktopDishNav.props";

export default function DesktopDishNav({
	className = "",
}: IDesktopDishNavProps) {
	const { cafeId } = useSelector(selectors.dish) as IDishWithCafeId;
	const cafePath = getCafePathById(cafeId);
	const { isShown, open, close } = useModal();

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

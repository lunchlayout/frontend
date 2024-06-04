import { BurgerButton, Button, Drawer, NavLink } from "@shared/ui";
import styles from "./dishNavigation.module.scss";
import { useSelector } from "react-redux";
import { selectors } from "@entities/Dish";
import { useModal } from "@shared/hook";
import { getCafePathById } from "@entities/Cafe/lib";
import { DishInfoModal } from "@entities/Dish/ui";
import { IDishNavigationProps } from "./dishNavigation.props";
import { BASE_URL as REVIEW_BASE_URL } from "@entities/Review/consts";
import { BASE_URL as CAFE_BASE_URL } from "@entities/Cafe/consts";
import { Desktop, Mobile } from "@shared/hoc";

export default function DishNavigation({
	className = "",
}: IDishNavigationProps) {
	const dishCafe = useSelector(selectors.dishCafe);
	const {
		isShown: isModalShown,
		open: modalOpen,
		close: modalClose,
	} = useModal();
	const {
		isShown: isDrawerShown,
		open: drawerOpen,
		close: drawerClose,
	} = useModal();
	if (!dishCafe) return null;
	const cafePath = getCafePathById(dishCafe.cafeId);

	const handleDrawerClose = () => drawerClose();

	const NavigationPanel = (
		<>
			<nav className={className}>
				<ul className={styles.links}>
					<li onClick={handleDrawerClose}>
						<NavLink className={styles.navLink} to={CAFE_BASE_URL}>
							Рестораны
						</NavLink>
					</li>
					<li onClick={handleDrawerClose}>
						<NavLink
							className={styles.navLink}
							to={REVIEW_BASE_URL}
						>
							Обратная связь
						</NavLink>
					</li>
					<li onClick={handleDrawerClose}>
						<NavLink className={styles.navLink} to={cafePath}>
							Блюда ресторана
						</NavLink>
					</li>
					<li onClick={handleDrawerClose}>
						<Button
							className={[styles.navLink, styles.aboutDish].join(
								" ",
							)}
							customType="filled"
							onClick={() => {
								modalOpen();
								handleDrawerClose();
							}}
						>
							О блюде
						</Button>
					</li>
				</ul>
			</nav>
			<DishInfoModal isOpen={isModalShown} onClose={modalClose} />
		</>
	);

	return (
		<>
			<Desktop>{NavigationPanel}</Desktop>
			<Mobile>
				<BurgerButton onClick={drawerOpen} />
				<Drawer open={isDrawerShown} onClose={drawerClose}>
					{NavigationPanel}
				</Drawer>
			</Mobile>
		</>
	);
}

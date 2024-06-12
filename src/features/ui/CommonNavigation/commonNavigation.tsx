import { BurgerButton, Link, NavLink, Drawer } from "@shared/ui";
import styles from "./commonNavigation.module.scss";
import { ICommonNavigationProps } from "./commonNavigation.props";
import { BASE_URL as REVIEW_BASE_URL } from "@entities/Review/consts";
import { BASE_URL as CAFE_BASE_URL } from "@entities/Cafe/consts";
import { useModal } from "@shared/hook";
import { Mobile, Desktop } from "@shared/hoc";

export default function CommonNavigation({
	className = "",
}: ICommonNavigationProps) {
	const {
		isShown: isDrawerShown,
		open: drawerOpen,
		close: drawerClose,
	} = useModal();
	const handleDrawerClose = () => drawerClose();
	console.log(isDrawerShown);
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
						<NavLink className={styles.navLink} to={"/scan"}>
							Сканировать QR
						</NavLink>
					</li>
					<li onClick={handleDrawerClose}>
						<Link className={styles.navLink} to="/" type="outlined">
							Найти блюдо
						</Link>
					</li>
				</ul>
			</nav>
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

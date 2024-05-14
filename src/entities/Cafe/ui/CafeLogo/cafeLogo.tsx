import { Image } from "@shared/ui";
import { ICafeLogoProps } from "./cafeLogo.props";
import { useSelector } from "react-redux";
import { selectors as cafeSelectors } from "@entities/Cafe";
import { ICafe } from "@entities/Cafe/types";
import { DEVICES } from "@features/consts";
import styles from "./cafeLogo.module.scss";
import { IDishCafe } from "@entities/Dish/types";
import { selectors as dishSelectors } from "@entities/Dish";

export default function CafeLogo({
	device = "mobile",
	...props
}: ICafeLogoProps) {
	const cafe = useSelector(cafeSelectors.сafe) as ICafe;
	const dishCafe = useSelector(dishSelectors.dishCafe) as IDishCafe;
	const existCafe = cafe.logo ? cafe : dishCafe;

	return (
		<>
			{existCafe && (
				<Image
					{...props}
					src={existCafe.logo}
					width={DEVICES[device]}
					height={DEVICES[device]}
					alt={`Логотип ${existCafe.name}`}
					className={styles.logo}
				/>
			)}
		</>
	);
}

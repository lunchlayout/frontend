import { Image } from "@shared/ui";
import { ICafeLogoProps } from "./cafeLogo.props";
import { useSelector } from "react-redux";
import { selectors } from "@entities/Cafe";
import { ICafe } from "@entities/Cafe/types";
import { DEVICES } from "@features/consts";
import styles from "./cafeLogo.module.scss";

export default function CafeLogo({
	device = "mobile",
	...props
}: ICafeLogoProps) {
	const { logo, name } = useSelector(selectors.сafe) as ICafe;
	return (
		<Image
			{...props}
			src={logo}
			width={DEVICES[device]}
			height={DEVICES[device]}
			alt={`Логотип ${name}`}
			className={styles.logo}
		/>
	);
}

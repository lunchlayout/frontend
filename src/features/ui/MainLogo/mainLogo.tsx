import { Image } from "@shared/ui";
import { IMainLogoProps } from "./mainLogo.props";
import { DEVICES } from "@features/consts";
import styles from "./mainLogo.module.scss";

export default function MainLogo({
	device = "mobile",
	...props
}: IMainLogoProps) {
	return (
		<Image
			{...props}
			src="/logo.png"
			width={DEVICES[device]}
			className={styles.logo}
			alt="Логотип Lunch Layout. На нем изображен стакан кофе в виде телефона"
		/>
	);
}

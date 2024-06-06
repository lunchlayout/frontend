import { Image } from "@shared/ui";
import { ICafeLogoProps } from "./cafeLogo.props";
import styles from "./cafeLogo.module.scss";

export default function CafeLogo({
	logo,
	name,
	className = "",
	...props
}: ICafeLogoProps) {
	return (
		<Image
			src={logo}
			alt={`Логотип ${name}`}
			className={[styles.logo, className].join(" ")}
			itemProp="image"
			{...props}
		/>
	);
}

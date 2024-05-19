import { IDishCardProps } from "./dishCard.props";
import styles from "./dishCard.module.scss";
import { Image } from "@shared/ui";

export default function DishCard({
	name,
	img,
	amount,
	unit,
	className = "",
}: IDishCardProps) {
	return (
		<article className={[styles.default, className].join(" ")}>
			<Image
				width={160}
				className={styles.image}
				src={img}
				alt={`${name} - фотография блюда`}
			/>
			<div className={styles.info}>
				<span>{name}</span>
				<span>{`${amount} ${unit}.`}</span>
			</div>
		</article>
	);
}

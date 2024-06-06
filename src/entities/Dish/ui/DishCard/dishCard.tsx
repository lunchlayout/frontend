import { IDishCardProps } from "./dishCard.props";
import styles from "./dishCard.module.scss";
import { Image } from "@shared/ui";
import { getClippedText } from "@shared/lib";

export default function DishCard({
	name,
	img,
	amount,
	unit,
	description,
	className = "",
}: IDishCardProps) {
	return (
		<article
			className={[styles.default, className].join(" ")}
			itemScope
			itemType="https://schema.org/MenuItem"
		>
			<Image
				height={160}
				className={styles.image}
				src={img}
				alt={`${name} - фотография блюда`}
				itemProp="image"
			/>
			<div className={styles.info}>
				<span className={styles.amount}>{`${amount} ${unit}.`}</span>
				<span className={styles.name} itemProp="name">
					{name}
				</span>
				<p className={styles.description} itemProp="description">
					{getClippedText(description)}
				</p>
			</div>
		</article>
	);
}

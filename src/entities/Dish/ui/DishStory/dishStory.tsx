import { IDishStoryProps } from "./dishStory.props";
import styles from "./dishStory.module.scss";
import { Image } from "@shared/ui";

export default function DishStory({
	description,
	img,
	className = "",
}: IDishStoryProps) {
	return (
		<article className={[styles.default, className].join(" ")}>
			<Image src={img} alt="Фотография, связанная с описанием блюда" />
			<p className={styles.text}>{description}</p>
		</article>
	);
}

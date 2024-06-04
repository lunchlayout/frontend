import { IDishStoryProps } from "./dishStory.props";
import styles from "./dishStory.module.scss";
import { Image } from "@shared/ui";

export default function DishStory({
	description,
	className = "",
}: IDishStoryProps) {
	return (
		<article className={[styles.default, className].join(" ")}>
			<Image
				className={styles.img}
				src="/images/storyGirl.png"
				alt=""
				width={250}
			/>
			<div className={styles.textContent}>
				<span className={styles.title}>Интересные факты</span>
				<p className={styles.story}>{description}</p>
			</div>
		</article>
	);
}

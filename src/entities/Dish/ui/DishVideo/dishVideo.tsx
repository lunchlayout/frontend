import { IDishVideoProps } from "./dishVideo.props";
import styles from "./dishVideo.module.scss";
import { VideoPlayer } from "@shared/ui";

export default function DishVideo({
	link,
	title,
	className = "",
}: IDishVideoProps) {
	return (
		<article className={[styles.default, className].join(" ")}>
			<VideoPlayer src={link} title={title} className={styles.player} />
		</article>
	);
}

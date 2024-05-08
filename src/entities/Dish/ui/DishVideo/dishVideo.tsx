import { IDishVideoProps } from "./dishVideo.props";
import styles from "./dishVideo.module.scss";
import { VideoFrame } from "@shared/ui";

export default function DishVideo({
	title,
	link,
	className = "",
}: IDishVideoProps) {
	return (
		<article className={[styles.default, className].join(" ")}>
			<VideoFrame src={link} title={title} height={300} />
			<p className={styles.text}>{title}</p>
		</article>
	);
}

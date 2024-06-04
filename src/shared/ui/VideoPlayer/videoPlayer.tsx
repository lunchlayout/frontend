import { IVideoPlayerProps } from "./videoPlayer.props";
import styles from "./videoPlayer.module.scss";
import ReactPlayer from "react-player";
import { PlayButton } from "@shared/ui";

export default function VideoPlayer({
	src,
	className = "",
	title,
	width = "100%",
	height,
}: IVideoPlayerProps) {
	return (
		<div
			aria-label={`Видео: ${title}`}
			className={[styles.default, className].join(" ")}
		>
			<ReactPlayer
				url={src}
				light
				playing
				controls
				playIcon={<PlayButton />}
				width={width}
				height={height}
			/>
		</div>
	);
}

import { IVideoFrameProps } from "./videoFrame.props";
import styles from "./videoFrame.module.scss";

export default function VideoFrame({
	src,
	title = "",
	className = "",
	width,
	height,
}: IVideoFrameProps) {
	return (
		<iframe
			className={[styles.default, className].join(" ")}
			width={width}
			height={height}
			src={src}
			title={title}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerPolicy="strict-origin-when-cross-origin"
			allowFullScreen
		></iframe>
	);
}

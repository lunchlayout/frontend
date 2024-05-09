import { IVideoFrameProps } from "./videoFrame.props";
import styles from "./videoFrame.module.scss";
import ReactPlayer from "react-player";
import { ButtonController } from "@shared/ui";
import React from "react";

export default function VideoFrame({
	src,
	className = "",
	width = "100%",
	height,
}: IVideoFrameProps) {
	return (
		<div className={[styles.default, className].join(" ")}>
			<ReactPlayer
				url={src}
				light
				playing
				controls
				playIcon={<ButtonController />}
				width={width}
				height={height}
			/>
		</div>
	);
}

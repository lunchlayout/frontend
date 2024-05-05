import { IImageProps } from "./image.props";
import styles from "./image.module.scss";

export default function Image({
	src,
	alt = "",
	loading = "eager",
	sizes,
	srcset,
	decoding = "auto",
	height,
	width,
	className = "",
}: IImageProps) {
	return (
		<img
			className={[styles.default, className].join(" ")}
			src={src}
			alt={alt}
			loading={loading}
			sizes={sizes}
			srcSet={srcset}
			decoding={decoding}
			height={height}
			width={width}
		/>
	);
}

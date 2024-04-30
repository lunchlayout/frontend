import { IImageProps } from "./image.props"
import styles from "./image.module.scss"

export default function Image(
    {
        src,
        alt = "",
        loading = "eager",
        sizes,
        srcset,
        decoding = "auto",
        height,
        width
    }: IImageProps) {

        return (
            <img
                className={styles.default} 
                src={src}
                alt={alt}
                loading={loading}
                sizes={sizes}
                srcSet={srcset}
                decoding={decoding}
                height={height}
                width={width}
            />
        )
}
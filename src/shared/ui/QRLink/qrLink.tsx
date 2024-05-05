import { IQRLinkProps } from "./qrLink.props";
import styles from "./qrLink.module.scss";
import { Image } from "@shared/ui";
import { useEffect, useState } from "react";
import qr from "qrcode";

export default function QRLink({
	src,
	label = "",
	className = "",
}: IQRLinkProps) {
	const [QRSrc, setQRSrc] = useState("");

	useEffect(() => {
		async function getQRSrc() {
			const QrSrc = await qr.toDataURL(src);
			setQRSrc(QrSrc);
		}
		getQRSrc();
	}, [src]);

	return (
		<div className={[styles.default, className].join(" ")}>
			<Image
				src={QRSrc}
				alt={`qrcode link to ${src}`}
				className={styles.qr}
			/>
			<p className={styles.text}>{label}</p>
		</div>
	);
}

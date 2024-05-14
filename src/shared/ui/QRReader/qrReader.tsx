import { IQRReaderProps } from "./qrReader.props";
import { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";
import styles from "./qrReader.module.scss";
import { CONTAINER_ID } from "./consts";
import { MediaTrackConfig, QRReaderConfig } from "./config";

export default function QRReader({
	className = "",
	onSuccess,
	onError,
}: IQRReaderProps) {
	const qrReaderRef = useRef<Html5Qrcode | null>(null);

	useEffect(() => {
		if (!qrReaderRef.current) {
			qrReaderRef.current = new Html5Qrcode(CONTAINER_ID);
			qrReaderRef.current.start(
				MediaTrackConfig,
				QRReaderConfig,
				onSuccess,
				onError,
			);
		}
		return () => {
			if (qrReaderRef.current && qrReaderRef.current.isScanning) {
				qrReaderRef.current.stop();
			}
		};
	}, [onSuccess, onError]);

	return (
		<div className={styles.default}>
			<div
				id={CONTAINER_ID}
				className={[styles.reader, className].join(" ")}
			></div>
			<span className={styles.hint}>Наведите камеру на QR код</span>
		</div>
	);
}

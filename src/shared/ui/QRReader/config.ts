import { Html5QrcodeCameraScanConfig } from "html5-qrcode";

const QRReaderConfig: Html5QrcodeCameraScanConfig = {
	fps: 10,
	qrbox: {
		width: 500,
		height: 500,
	},
};
const MediaTrackConfig: MediaTrackConstraints = {
	facingMode: "environment",
};

export { QRReaderConfig, MediaTrackConfig };

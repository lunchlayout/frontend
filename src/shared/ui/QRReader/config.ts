import { Html5QrcodeCameraScanConfig } from "html5-qrcode";

const QRReaderConfig: Html5QrcodeCameraScanConfig = {
	fps: 10,
};
const MediaTrackConfig: MediaTrackConstraints = {
	facingMode: "environment",
};

export { QRReaderConfig, MediaTrackConfig };

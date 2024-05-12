import { IDefaultProps } from "@shared/types";
import { QrcodeErrorCallback, QrcodeSuccessCallback } from "html5-qrcode";

export interface IQRReaderProps extends IDefaultProps {
	onSuccess: QrcodeSuccessCallback;
	onError: QrcodeErrorCallback;
}

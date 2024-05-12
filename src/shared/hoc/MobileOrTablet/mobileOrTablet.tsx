import { useMediaQuery } from "react-responsive";
import { IMobileOrTabletProps } from "./mobileOrTablet.props";
import { DeviceConfig } from "@app/config/device";

export default function MobileOrTablet({ children }: IMobileOrTabletProps) {
	const isMobileOrTablet = useMediaQuery({ ...DeviceConfig.mobileOrTablet });
	return isMobileOrTablet ? children : null;
}

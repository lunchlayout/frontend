import { MediaQueryAllQueryable } from "react-responsive";

interface IDeviceConfig {
	desktop: MediaQueryAllQueryable;
	mobileOrTablet: MediaQueryAllQueryable;
}

export type { IDeviceConfig };

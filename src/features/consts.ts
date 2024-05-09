import { DeviceType } from "@features/types";

const DEVICES: Record<DeviceType, number> = {
	mobile: 50,
	tablet: 75,
	desktop: 100,
} as const;

export { DEVICES };

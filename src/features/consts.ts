import { DeviceType } from "@features/types";

const DEVICES: Record<DeviceType, number> = {
	mobile: 40,
	tablet: 75,
	desktop: 100,
} as const;

export { DEVICES };

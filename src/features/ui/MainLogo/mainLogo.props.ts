import { DeviceType } from "@features/types";
import { IImageProps } from "@shared/ui/Image/image.props";

interface IMainLogoProps extends Omit<IImageProps, "src" | "alt"> {
	device?: DeviceType;
}

export type { IMainLogoProps };

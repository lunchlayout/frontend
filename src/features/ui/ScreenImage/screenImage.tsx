import { IScreenImageProps } from "./screenImage.props";

import { Image } from "@shared/ui";

export default function ScreenImage({ className = "" }: IScreenImageProps) {
	return (
		<Image
			src="/desktopPhoneScreen.png"
			alt=""
			height={330}
			className={className}
		/>
	);
}

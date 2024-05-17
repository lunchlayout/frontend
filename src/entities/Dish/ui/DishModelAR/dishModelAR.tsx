import { selectors } from "@entities/Dish";
import { useSelector } from "react-redux";
import { IDishModelARProps } from "./dishModelAR.props";
import { ModelViewerElement } from "@google/model-viewer";
import "@google/model-viewer";

//* Декларация типов для model-viewer
declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace JSX {
		interface IntrinsicElements {
			"model-viewer": React.DetailedHTMLProps<
				React.HTMLAttributes<ModelViewerElement> & ModelViewerProps,
				ModelViewerElement
			>;
		}
	}
}

interface ModelViewerProps {
	src: string;
	alt?: string;
	ar?: boolean;
	shadowIntensity?: string;
	autoRotate?: boolean;
	cameraControls?: boolean;
	touchAction?: string;
}

export default function DishModelAR({ children }: IDishModelARProps) {
	const dish = useSelector(selectors.dish);
	return (
		<>
			{dish && (
				<model-viewer
					style={{ width: "80px", height: "80px" }}
					alt={`${dish.name} ar model`}
					src={dish.modelLink}
					ar
					shadow-intensity="1"
					auto-rotate
					camera-controls
					touch-action="pan-y"
				>
					{children}
				</model-viewer>
			)}
		</>
	);
}

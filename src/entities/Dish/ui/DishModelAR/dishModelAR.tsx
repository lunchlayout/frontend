import { selectors } from "@entities/Dish";
import { useSelector } from "react-redux";
import { IDishModelARProps } from "./dishModelAR.props";
import "@google/model-viewer";

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
					reveal
					camera-controls
					touch-action="pan-y"
				>
					{children}
				</model-viewer>
			)}
		</>
	);
}

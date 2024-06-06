import { DishModel3D } from "@entities/Dish/ui";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styles from "./dish3DCanvas.module.scss";
import { SceneSetup, WoodPlane3D } from "@features/ui";
import { useSelector } from "react-redux";
import { selectors } from "@entities/Dish";
import { CircularLoader } from "@shared/ui";

export default function Dish3DCanvas() {
	const isModelLoading = useSelector(selectors.isModelLoading);
	const scene = useSelector(selectors.scene);

	return (
		<>
			{scene && !isModelLoading && (
				<Canvas className={[styles.default].join(" ")}>
					<SceneSetup>
						<Environment preset="apartment" background />
					</SceneSetup>
					<DishModel3D />
					<WoodPlane3D />
				</Canvas>
			)}
			<CircularLoader open={!scene || !!isModelLoading} />
		</>
	);
}

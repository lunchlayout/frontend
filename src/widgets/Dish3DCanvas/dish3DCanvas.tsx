import { DishModel3D } from "@entities/Dish/ui";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styles from "./dish3DCanvas.module.scss";
import { SceneSetup, WoodPlane3D } from "@features/ui";

export default function Dish3DCanvas() {
	return (
		<Canvas className={styles.default}>
			<SceneSetup>
				<Environment preset="apartment" background />
			</SceneSetup>
			<DishModel3D />
			<WoodPlane3D />
		</Canvas>
	);
}

import { Canvas } from "@react-three/fiber";
import styles from "./dishARCanvas.module.scss";
import { ARButton, XR } from "@react-three/xr";
import { DishModel3D } from "@entities/Dish/ui";
import { SceneSetup } from "@features/ui";

//! Компонент не используется, так как webXR не поддерживается на многих устройствах
export default function DishARCanvas() {
	return (
		<>
			<ARButton
				sessionInit={{
					requiredFeatures: ["hit-test"],
				}}
			/>
			<Canvas className={styles.default}>
				<XR>
					<SceneSetup />
					<DishModel3D />
				</XR>
			</Canvas>
		</>
	);
}

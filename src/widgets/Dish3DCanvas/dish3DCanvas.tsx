import { DishModel3D } from "@entities/Dish/ui";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styles from "./dish3DCanvas.module.scss";
import { WoodPlane3D } from "@features/ui";

export default function Dish3DCanvas() {
	return (
		<Canvas
			className={styles.default}
			camera={{
				fov: 90,
				position: [0, 0, 3],
			}}
		>
			<ambientLight intensity={0.1} />
			<directionalLight position={[1, 1, 1]} intensity={0.8} />
			<OrbitControls
				minDistance={1.5}
				maxDistance={4.5}
				zoomSpeed={0.6}
				rotateSpeed={0.6}
				autoRotate
			/>

			<Environment preset="apartment" background />
			<DishModel3D />
			<WoodPlane3D />
		</Canvas>
	);
}

import { DishModel3D } from "@entities/Dish/ui";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styles from "./dish3DCanvas.module.scss";

export default function Dish3DCanvas() {
	return (
		<Canvas
			className={styles.default}
			camera={{
				fov: 90,
				position: [0, 0, 3],
			}}
		>
			<ambientLight intensity={0.5} />
			<directionalLight position={[1, 1, 1]} intensity={0.8} />
			<OrbitControls
				minDistance={2}
				maxDistance={4}
				zoomSpeed={0.6}
				rotateSpeed={0.6}
			/>
			<DishModel3D />
		</Canvas>
	);
}

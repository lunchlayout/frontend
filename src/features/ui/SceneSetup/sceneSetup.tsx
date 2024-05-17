import { OrbitControls } from "@react-three/drei";
import { ISceneSetupProps } from "./sceneSetup.props";

export default function SceneSetup({ children }: ISceneSetupProps) {
	return (
		<>
			<perspectiveCamera fov={90} position={[0, 0, 3]} />
			<ambientLight intensity={0.1} />
			<directionalLight position={[1, 1, 1]} intensity={0.8} />
			<OrbitControls
				minDistance={1.5}
				maxDistance={4.5}
				zoomSpeed={0.6}
				rotateSpeed={0.6}
				autoRotate
			/>
			{children}
		</>
	);
}

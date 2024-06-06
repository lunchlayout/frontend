import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, Vector3 } from "three";
import { IModel3DProps } from "./model3D.props";

export default function Model3D({
	scene,
	scale = new Vector3(0, 0, 0),
	position = new Vector3(0, 0, 0),
	hasRotation = false,
}: IModel3DProps) {
	const meshRef = useRef<Mesh>(null);
	useFrame(() => {
		if (hasRotation && meshRef.current) {
			meshRef.current.rotation.z += 0.003;
		}
	});
	console.log(scene);
	return (
		<mesh position={position} scale={scale} ref={meshRef}>
			<primitive object={scene} />
		</mesh>
	);
}

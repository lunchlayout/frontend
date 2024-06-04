import { useLoader } from "@react-three/fiber";
import { TextureLoader, Vector3 } from "three";
import woodTexture from "/images/woodTexture.jpg";
import { Plane3D } from "@shared/ui";

export default function WoodPlane3D() {
	const texture = useLoader(TextureLoader, woodTexture);
	return (
		<>
			<Plane3D
				texture={texture}
				args={[10, 10]}
				position={new Vector3(0, -1, 0)}
			/>
		</>
	);
}

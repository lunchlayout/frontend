import { DoubleSide, Vector3 } from "three";
import { IPlane3DProps } from "./plane3D.props";

export default function Plane3D({
	texture,
	position = new Vector3(0, 0, 0),
	args,
}: IPlane3DProps) {
	return (
		<>
			<mesh rotation={[-Math.PI / 2, 0, 0]} position={position}>
				<planeGeometry args={args} />
				<meshStandardMaterial map={texture} side={DoubleSide} />
			</mesh>
		</>
	);
}

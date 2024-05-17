import { IDefaultProps } from "@shared/types";
import { Texture, Vector3 } from "three";

interface IPlane3DProps extends IDefaultProps {
	texture?: Texture;
	position?: Vector3;
	args: [number, number];
}

export type { IPlane3DProps };

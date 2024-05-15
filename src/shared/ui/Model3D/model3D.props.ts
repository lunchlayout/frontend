import { IDefaultProps } from "@shared/types";
import { Group, Object3DEventMap, Vector3 } from "three";

interface IModel3DProps extends IDefaultProps {
	scene: Group<Object3DEventMap>;
	position?: Vector3;
	scale?: Vector3;
	hasRotation?: boolean;
}

export type { IModel3DProps };

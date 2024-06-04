import { IDefaultProps } from "@shared/types";
import { Group, Object3DEventMap } from "three";
import { HTMLMesh } from "three/examples/jsm/Addons.js";

interface IModel3DProps
	extends IDefaultProps,
		Partial<Pick<HTMLMesh, "position" | "scale">> {
	scene: Group<Object3DEventMap>;
	hasRotation?: boolean;
}

export type { IModel3DProps };

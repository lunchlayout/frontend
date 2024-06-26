import { selectors } from "@entities/Dish";
import { Model3D } from "@shared/ui";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box3, Vector3 } from "three";
import { REQUIRED_AXIS_LENGTH } from "./consts";

export default function DishModel3D() {
	const scene = useSelector(selectors.scene);

	const [scale, setScale] = useState<number>();
	const [positionY, setPositionY] = useState<number>();

	//? После второго рендера модель уменьшается в размерах. isFirstRender - проверка на первый рендер
	const [isFirstRender, setIsFirstRender] = useState(false);

	useEffect(() => {
		if (scene && !isFirstRender) {
			const modelBox = new Box3().setFromObject(scene);
			const modelSize = modelBox.getSize(new Vector3(0, 0, 0));
			console.log(modelSize.z);
			let requiredScale = 1;
			while (modelSize.z * requiredScale < REQUIRED_AXIS_LENGTH) {
				requiredScale++;
			}
			setScale(requiredScale);
			setPositionY(-modelSize.z);
			setIsFirstRender(true);
		}
	}, [scene, isFirstRender]);
	return (
		<>
			{scene && (
				<Model3D
					scene={scene}
					position={new Vector3(0, positionY, 0)}
					scale={new Vector3(scale, scale, scale)}
				/>
			)}
		</>
	);
}

import { useAppDispatch } from "@app/index";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { actions, selectors } from "..";
import { GLTF, GLTFLoader } from "three/examples/jsm/Addons.js";

function useDishModelLoader() {
	const dispatch = useAppDispatch();
	const dish = useSelector(selectors.dish);
	const modelLoadingProgress = useSelector(selectors.modelLoadingProgress);
	const scene = useSelector(selectors.scene);

	function handleProgress(progress: ProgressEvent<EventTarget>) {
		if (!modelLoadingProgress) {
			dispatch(
				actions.setModelLoadingInit({
					max: progress.total,
					value: progress.loaded,
				}),
			);
		} else {
			dispatch(actions.setModelLoadingValue(progress.loaded));
		}
	}

	function handleLoad(gltf: GLTF) {
		dispatch(actions.setScene(gltf.scene));
	}
	useEffect(() => {
		if (dish && !scene) {
			const gltfLoader = new GLTFLoader();
			gltfLoader.load(dish.modelLink, handleLoad, handleProgress);
		}
	}, [dish, scene]);
}

export { useDishModelLoader };

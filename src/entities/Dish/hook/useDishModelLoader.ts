import { useAppDispatch } from "@app/index";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { actions, selectors } from "..";
import { GLTF, GLTFLoader } from "three/examples/jsm/Addons.js";
import { useIsSameDish } from "./useIsSameDish";

function useDishModelLoader() {
	const dispatch = useAppDispatch();
	const dish = useSelector(selectors.dish);
	const modelLoadingProgress = useSelector(selectors.modelLoadingProgress);
	const scene = useSelector(selectors.scene);

	const isSameDish = useIsSameDish();

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
		dispatch(actions.setIsModelLoading(false));
	}
	useEffect(() => {
		if (!isSameDish && dish && !scene) {
			const gltfLoader = new GLTFLoader();
			dispatch(actions.setIsModelLoading(true));
			gltfLoader.load(dish.modelLink, handleLoad, handleProgress);
		}
	}, [dish, scene, isSameDish]);
}

export { useDishModelLoader };

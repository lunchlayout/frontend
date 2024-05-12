import { IEntertainmentSliderProps } from "./entertainmentSlider.props";
import styles from "./entertainmentSlider.module.scss";
import { actions, selectors } from "@entities/Dish";
import { IDishWithCafeId } from "@entities/Dish/types";
import { useSelector } from "react-redux";
import { IEntertainmentDetails } from "@entities/Dish/types/entertainment";
import React from "react";
import DishStory from "../DishStory";
import DishVideo from "../DishVideo";
import DishQuiz from "../DishQuiz";
import { ButtonController } from "@shared/ui";
import { useAppDispatch } from "@app/index";
import { Desktop, MobileOrTablet } from "@shared/hoc";

export default function EntertainmentSlider({
	className = "",
}: IEntertainmentSliderProps) {
	const { entertainment } = useSelector(selectors.dish) as IDishWithCafeId;
	const { currentEntIdx } = useSelector(
		selectors.dishEntDetails,
	) as IEntertainmentDetails;
	const dispatch = useAppDispatch();
	const currentEnt = entertainment[currentEntIdx];
	console.log(entertainment);
	let EntComponentTag: React.JSX.Element;

	if ("img" in currentEnt) {
		EntComponentTag = (
			<DishStory className={styles.entertainment} {...currentEnt} />
		);
	} else if ("link" in currentEnt) {
		EntComponentTag = (
			<DishVideo className={styles.entertainment} {...currentEnt} />
		);
	} else {
		EntComponentTag = (
			<DishQuiz className={styles.entertainment} {...currentEnt} />
		);
	}

	function prevEnt() {
		dispatch(actions.setCurrentEntIdx(currentEntIdx - 1));
	}

	function nextEnt() {
		dispatch(actions.setCurrentEntIdx(currentEntIdx + 1));
	}

	const prevBtn = (
		<ButtonController
			className={[styles.controller, styles.leftController].join(" ")}
			direction="left"
			onClick={prevEnt}
		/>
	);
	const nextBtn = (
		<ButtonController
			className={[styles.controller, styles.rightController].join(" ")}
			direction="right"
			onClick={nextEnt}
		/>
	);

	return (
		<section className={[styles.default, className].join(" ")}>
			<Desktop>{prevBtn}</Desktop>
			{EntComponentTag}
			<Desktop>{nextBtn}</Desktop>
			<MobileOrTablet>
				<div className={styles.sliderController}>
					{prevBtn}
					{nextBtn}
				</div>
			</MobileOrTablet>
		</section>
	);
}

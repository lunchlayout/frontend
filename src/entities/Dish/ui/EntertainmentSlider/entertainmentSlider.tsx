import { IEntertainmentSliderProps } from "./entertainmentSlider.props";
import styles from "./entertainmentSlider.module.scss";
import { actions, selectors } from "@entities/Dish";
import { useSelector } from "react-redux";
import React from "react";
import DishStory from "../DishStory";
import DishVideo from "../DishVideo";
import DishQuiz from "../DishQuiz";
import { ButtonController } from "@shared/ui";
import { useAppDispatch } from "@app/index";
import { Desktop, Mobile } from "@shared/hoc";

export default function EntertainmentSlider({
	className = "",
}: IEntertainmentSliderProps) {
	const dispatch = useAppDispatch();
	const dish = useSelector(selectors.dish);
	const dishEntDetails = useSelector(selectors.dishEntDetails);
	if (!dish || !dishEntDetails) return null;
	const currentEnt = dish.entertainment[dishEntDetails.currentEntIdx];
	let EntComponent: React.JSX.Element;

	if ("img" in currentEnt) {
		EntComponent = (
			<DishStory className={styles.entertainment} {...currentEnt} />
		);
	} else if ("link" in currentEnt) {
		EntComponent = (
			<DishVideo className={styles.entertainment} {...currentEnt} />
		);
	} else {
		EntComponent = (
			<DishQuiz className={styles.entertainment} {...currentEnt} />
		);
	}

	const prevEnt = () => {
		dispatch(actions.setCurrentEntIdx(dishEntDetails.currentEntIdx - 1));
	};

	const nextEnt = () => {
		dispatch(actions.setCurrentEntIdx(dishEntDetails.currentEntIdx + 1));
	};

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
			{EntComponent}
			<Desktop>{nextBtn}</Desktop>
			<Mobile>
				<div className={styles.sliderController}>
					{prevBtn}
					{nextBtn}
				</div>
			</Mobile>
		</section>
	);
}

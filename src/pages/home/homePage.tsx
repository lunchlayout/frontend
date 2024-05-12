import React, { useEffect, useRef, useState } from "react";
import { Button, Input, SEO, TextArea } from "@shared/ui";
import EmojiRadio from "@shared/ui/EmojiRadio";
import QuizOption from "@features/ui/QuizOption";
import { CommentSection } from "@entities/Review/ui";
import { Comment } from "@features/context";

import SearchDishesPanel from "@features/ui/SearchDishesPanel";
import MobileDishControl from "@widgets/MobileDishControl";
import { actions, selectors } from "@entities/Dish";
import { useSelector } from "react-redux";
import { IProgress } from "@shared/ui/Progress";
import { useAppDispatch } from "@app/index";

export default function HomePage() {
	const [checked, setChecked] = useState(false);
	const refId = useRef<NodeJS.Timeout | 0>(0);
	const [progress, setProgress] = useState(0);
	const [comment, setComment] = useState<string>("");
	const modelProgress = useSelector(selectors.modelLoadingProgress);
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (!modelProgress) {
			dispatch(
				actions.setModelLoadingInit({
					max: 200,
					value: 1,
				}),
			);
		} else {
			if (refId.current) return;
			refId.current = setInterval(() => {
				setProgress(pr => {
					if (pr >= modelProgress.max) {
						clearInterval(refId.current);
					}
					dispatch(actions.setModelLoadingValue(pr + 1));
					return pr + 1;
				});
			}, 100);
		}
	}, [modelProgress]);

	return (
		<>
			<Button>Продолжить</Button>
			<Input placeholder="Найти блюдо" />
			<TextArea placeholder="Привет" />
			<EmojiRadio
				checked={checked}
				onChange={() => setChecked(!checked)}
			/>
			<QuizOption
				label="Привет!"
				checked={checked}
				onChange={() => setChecked(!checked)}
			/>
			<SearchDishesPanel />
			<Comment.Context.Provider
				value={{
					value: comment,
					handleChange: e => {
						setComment(e.target.value);
					},
				}}
			>
				<CommentSection />
			</Comment.Context.Provider>
			<MobileDishControl />
			<SEO title={`Lunch Layout`} />
		</>
	);
}

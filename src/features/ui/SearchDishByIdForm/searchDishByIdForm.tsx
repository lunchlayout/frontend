import { FormEvent, useState } from "react";
import styles from "./searchDishByIdForm.module.scss";
import { Button, Input } from "@shared/ui";
import { actions, selectors } from "@entities/Dish";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@app/index";
import { ISearchDishByIdFormProps } from "./searchDishByIdForm.props";
import { getDishPathById } from "@entities/Dish/lib";
import { Notice } from "@features/context";
import SnackbarNotices from "../SnackbarNotices";
import { useImmer } from "use-immer";
import { INoticeState } from "@shared/ui/SnackbarNotice";
import { useSelector } from "react-redux";

export default function SearchDishByIdForm({
	className = "",
}: ISearchDishByIdFormProps) {
	const [dishId, setDishId] = useState("");
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [notices, setNotices] = useImmer<INoticeState[]>([]);
	const isLoading = useSelector(selectors.isLoading);

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		dispatch(actions.setIsLoading(true));
		const res = await dispatch(actions.getDishById({ dishId }));
		if (res.meta.requestStatus === "fulfilled") {
			return navigate(getDishPathById(dishId));
		} else {
			setNotices(draft => {
				draft.push({
					id: draft.length + 1,
					isOpen: true,
					severity: "error",
					text: "Товара с таким кодом не существует",
				});
			});
		}
		dispatch(actions.setIsLoading(false));
	}

	return (
		<>
			<form
				className={[styles.default, className].join(" ")}
				onSubmit={handleSubmit}
			>
				<Input
					placeholder="Введите код блюда"
					value={dishId}
					hasOutline={false}
					onChange={e => setDishId(e.target.value)}
					className={styles.input}
				/>
				<Button
					customType="outlined"
					type="submit"
					hasHover={false}
					className={styles.btn}
					disabled={isLoading}
				>
					<svg
						width="38"
						height="8"
						viewBox="0 0 38 8"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM37.3536 
						4.35355C37.5488 4.15829 37.5488 3.84171 37.3536 3.64645L34.1716 0.464466C33.9763 0.269204 
						33.6597 0.269204 33.4645 0.464466C33.2692 0.659728 33.2692 0.976311 33.4645 1.17157L36.2929 
						4L33.4645 6.82843C33.2692 7.02369 33.2692 7.34027 33.4645 7.53553C33.6597 7.7308 33.9763 
						7.7308 34.1716 7.53553L37.3536 4.35355ZM1 4.5H37V3.5H1V4.5Z"
						/>
					</svg>
				</Button>
			</form>
			<Notice.Context.Provider value={{ notices, setNotices }}>
				<SnackbarNotices />
			</Notice.Context.Provider>
		</>
	);
}

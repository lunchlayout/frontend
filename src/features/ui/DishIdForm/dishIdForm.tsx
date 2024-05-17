import { FormEvent, useState } from "react";
import styles from "./dishIdForm.module.scss";
import { Button, Input } from "@shared/ui";
import { actions } from "@entities/Dish";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@app/index";
import { IDishIdFormProps } from "./dishIdForm.props";
import { getDishPathById } from "@entities/Dish/lib";
import { Notice } from "@features/context";
import SnackbarNotices from "../SnackbarNotices";
import { useImmer } from "use-immer";
import { INoticeState } from "@shared/ui/SnackbarNotice";

export default function DishIdForm({ className = "" }: IDishIdFormProps) {
	const [dishId, setDishId] = useState("");
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [notices, setNotices] = useImmer<INoticeState[]>([]);

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
				className={[styles.form, className].join(" ")}
				onSubmit={handleSubmit}
			>
				<Input
					placeholder="Введите код"
					value={dishId}
					onChange={e => setDishId(e.target.value)}
					className={styles.input}
				/>
				<Button customType="secondary" type="submit">
					Продолжить
				</Button>
			</form>
			<Notice.Context.Provider value={{ notices, setNotices }}>
				<SnackbarNotices />
			</Notice.Context.Provider>
		</>
	);
}

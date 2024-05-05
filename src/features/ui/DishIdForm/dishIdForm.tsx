import { FormEvent, useState } from "react";
import styles from "./dishIdForm.module.scss";
import { Button, Input } from "@shared/ui";
import { actions } from "@entities/Dish";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@app/index";
import { IDishIdFormProps } from "./dishIdForm.props";

export default function DishIdForm({ className = "" }: IDishIdFormProps) {
	const [dishId, setDishId] = useState("");
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const res = await dispatch(actions.getDishById({ dishId }));
		if (res.meta.requestStatus === "fulfilled") {
			return navigate(`/dishes/${dishId}`);
		}
	}

	return (
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
	);
}

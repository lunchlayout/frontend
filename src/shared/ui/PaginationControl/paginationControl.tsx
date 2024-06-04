import ButtonController from "../ButtonController";
import styles from "./paginationControl.module.scss";
import { IPaginationControlProps } from "./paginationControl.props";

export default function PaginationControl({
	currentPage,
	pageCnt,
	onLeftClick,
	onRightClick,
	className = "",
}: IPaginationControlProps) {
	return (
		<div className={[styles.default, className].join(" ")}>
			<ButtonController
				disabled={currentPage < 2}
				direction="left"
				onClick={onLeftClick}
				className={styles.control}
			/>
			<span
				className={styles.label}
			>{`${currentPage} / ${pageCnt}`}</span>
			<ButtonController
				disabled={currentPage >= pageCnt}
				direction="right"
				onClick={onRightClick}
				className={styles.control}
			/>
		</div>
	);
}

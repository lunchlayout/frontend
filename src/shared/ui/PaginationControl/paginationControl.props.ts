import { IDefaultProps } from "@shared/types";
import { MouseEventHandler } from "react";

export interface IPaginationControlProps extends IDefaultProps {
	currentPage: number;
	pageCnt: number;
	onLeftClick?: MouseEventHandler<HTMLButtonElement>;
	onRightClick?: MouseEventHandler<HTMLButtonElement>;
}

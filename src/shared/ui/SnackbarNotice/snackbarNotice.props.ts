import { AlertProps, SnackbarProps } from "@mui/material";
import { IDefaultProps } from "@shared/types";

interface INoticeState extends Pick<AlertProps, "severity"> {
	id: number;
	isOpen: boolean;
	text: string;
}

type ISnackbarNoticeProps = Pick<SnackbarProps, "open"> &
	Pick<AlertProps, "severity"> &
	IDefaultProps &
	Required<Pick<IDefaultProps, "children">> & { onClose: () => void };

export type { INoticeState, ISnackbarNoticeProps };

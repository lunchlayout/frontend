import { INoticeState } from "@shared/ui/SnackbarNotice";
import { Updater } from "use-immer";

interface INoticeContext {
	notices: INoticeState[];
	setNotices: Updater<INoticeState[]>;
}

export type { INoticeContext };

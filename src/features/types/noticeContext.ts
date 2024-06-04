import { INotice } from "@shared/ui/SnackbarNotice";
import { Updater } from "use-immer";

interface INoticeContext {
	notices: INotice[];
	setNotices: Updater<INotice[]>;
}

export type { INoticeContext };

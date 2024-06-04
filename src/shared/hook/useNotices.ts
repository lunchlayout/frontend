import { INotice } from "@shared/ui/SnackbarNotice";
import { nanoid } from "nanoid";
import { useImmer } from "use-immer";

function useNotices() {
	const [notices, setNotices] = useImmer<INotice[]>([]);
	const addNotice = (newNotice: Omit<INotice, "id" | "isOpen">) => {
		setNotices(draft => {
			draft.push({
				...newNotice,
				id: nanoid(10),
				isOpen: true,
			});
		});
	};
	const deleteNotice = (noticeId: string) => {
		setNotices(draft => {
			return draft.filter(notice => notice.id !== noticeId);
		});
	};
	const toggleNotice = (noticeId: string) => {
		setNotices(draft => {
			return draft.map(notice => {
				if (notice.id === noticeId)
					return { ...notice, isOpen: !notice.isOpen };
				else return notice;
			});
		});
	};
	return {
		addNotice,
		deleteNotice,
		toggleNotice,
		notices,
	};
}

export { useNotices };

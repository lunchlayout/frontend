import { Notice } from "@features/context";
import { SnackbarNotice } from "@shared/ui";

export default function SnackbarNotices() {
	const { notices, setNotices } = Notice.useContext();

	return (
		<>
			{notices.map((notice, idx) => {
				return (
					<SnackbarNotice
						key={idx}
						severity={notice.severity}
						open={notice.isOpen}
						onClose={() => {
							setNotices(draft => {
								return draft.map(draftNotice => {
									if (draftNotice.id === notice.id) {
										return {
											...draftNotice,
											isOpen: false,
										};
									} else {
										return draftNotice;
									}
								});
							});
						}}
					>
						{notice.text}
					</SnackbarNotice>
				);
			})}
		</>
	);
}

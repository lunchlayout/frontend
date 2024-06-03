import { ISnackbarNoticeProps } from "./snackbarNotice.props";
import { Alert, Slide, SlideProps, Snackbar } from "@mui/material";
import styles from "./snackbarNotice.module.scss";

export default function SnackbarNotice({
	open = false,
	onClose,
	severity = "info",
	children,
	className = "",
}: ISnackbarNoticeProps) {
	const handleClose = (
		_event: React.SyntheticEvent | Event,
		reason?: string,
	) => {
		if (reason === "clickaway") return;
		if (onClose) onClose();
	};

	return (
		<Snackbar
			open={open}
			onClose={handleClose}
			anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
			autoHideDuration={4000}
			TransitionComponent={SlideTransition}
			transitionDuration={800}
			className={className}
		>
			<Alert severity={severity} className={styles.alert}>
				{children}
			</Alert>
		</Snackbar>
	);
}

function SlideTransition(props: SlideProps) {
	return <Slide {...props} direction="right" />;
}

import { ICircularLoaderProps } from "./circularLoader.props";
import { Backdrop, CircularProgress } from "@mui/material";
import styles from "./circularLoader.module.scss";

export default function CircularLoader({
	open = false,
	hasBackdrop = false,
}: ICircularLoaderProps) {
	return (
		<>
			{hasBackdrop && open && (
				<Backdrop
					className={styles.default}
					sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}
					open={open}
				>
					<CircularProgress color="inherit" />
				</Backdrop>
			)}
			{!hasBackdrop && open && (
				<div className={styles.loaderContainer}>
					<CircularProgress color="inherit" />
				</div>
			)}
		</>
	);
}

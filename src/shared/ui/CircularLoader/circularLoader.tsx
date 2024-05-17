import { ICircularLoaderProps } from "./circularLoader.props";
import { Backdrop, CircularProgress } from "@mui/material";
import styles from "./circularLoader.module.scss";

export default function CircularLoader({ open = false }: ICircularLoaderProps) {
	return (
		<Backdrop
			className={styles.default}
			sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}
			open={open}
		>
			<CircularProgress color="inherit" />
		</Backdrop>
	);
}

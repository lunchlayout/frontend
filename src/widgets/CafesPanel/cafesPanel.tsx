import { CafesPaginationControl, SearchCafesPanel } from "@features/ui";
import { useSelector } from "react-redux";
import { selectors } from "@entities/Cafe";
import styles from "./cafesPanel.module.scss";
import { CircularLoader, NoResultsFound } from "@shared/ui";
import { CafeList } from "@entities/Cafe/ui";
import { ICafesPanelProps } from "./cafesPanel.props";

export default function CafesPanel({ className = "" }: ICafesPanelProps) {
	const currentCafes = useSelector(selectors.currentCafes);
	const isLoading = useSelector(selectors.isLoading);

	return (
		<section className={[styles.default, className].join(" ")}>
			<SearchCafesPanel />
			<CircularLoader open={isLoading} />
			{currentCafes && !isLoading && (
				<>
					{!!currentCafes.cafes.length && (
						<>
							<CafeList className={styles.cafeList} />
							<CafesPaginationControl />
						</>
					)}
					{!currentCafes.cafes.length && (
						<NoResultsFound
							label="Заведений пока нет..."
							className={styles.notFound}
						/>
					)}
				</>
			)}
		</section>
	);
}

import { CafesPaginationControl, SearchCafesPanel } from "@features/ui";
import { useSelector } from "react-redux";
import { selectors } from "@entities/Cafe";
import styles from "./cafesPanel.module.scss";
import { NoResultsFound } from "@shared/ui";
import { CafeList } from "@entities/Cafe/ui";
import { ICafesPanelProps } from "./cafesPanel.props";

export default function CafesPanel({ className = "" }: ICafesPanelProps) {
	const currentCafes = useSelector(selectors.currentCafes);

	return (
		<section className={[styles.default, className].join(" ")}>
			<SearchCafesPanel />
			{currentCafes && (
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

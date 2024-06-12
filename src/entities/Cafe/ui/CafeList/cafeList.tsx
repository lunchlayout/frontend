import { ICafeListProps } from "./cafeList.props";
import styles from "./cafeList.module.scss";
import { useSelector } from "react-redux";
import { selectors } from "@entities/Cafe";
import { Link } from "@shared/ui";
import { getCafePathById } from "@entities/Cafe/lib";
import { CafeCard } from "@entities/Cafe/ui";

export default function CafeList({ className = "" }: ICafeListProps) {
	const currentCafes = useSelector(selectors.currentCafes);

	return (
		<ul className={[styles.default, className].join(" ")}>
			{currentCafes?.cafes.map(cafe => {
				return (
					<li key={cafe.cafeId}>
						<Link
							type="outlined"
							className={styles.cafeLink}
							to={getCafePathById(cafe.cafeId)}
						>
							<CafeCard
								className={styles.cafe}
								logo={cafe.logo}
								name={cafe.name}
							/>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

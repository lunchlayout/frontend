import { Input } from "@shared/ui";
import { ISearchPanelProps } from "./searchPanel.props";
import styles from "./searchPanel.module.scss";
import { Query } from "@features/context";

export default function SearchPanel({
	onSubmit,
	placeholder = "",
	className = "",
	disabled = false,
}: ISearchPanelProps) {
	const { value, handleChange } = Query.useContext();

	return (
		<search className={className}>
			<form
				className={[styles.default, value && styles.hasContent].join(
					" ",
				)}
				onSubmit={onSubmit}
			>
				<label className={styles.label}>
					<svg
						width="21"
						height="22"
						viewBox="0 0 21 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className={styles.magnifier}
					>
						<path
							d="M19.8752 20.3752L15.3513 15.8513M15.3513 15.8513C16.1251 15.0774 16.7389 14.1587 17.1577 
						13.1477C17.5765 12.1366 17.7921 11.0529 17.7921 9.95855C17.7921 8.86417 17.5765 7.78051 17.1577 
						6.76944C16.7389 5.75836 16.1251 4.83968 15.3513 4.06584C14.5774 3.292 13.6587 2.67815 12.6477 
						2.25935C11.6366 1.84055 10.5529 1.625 9.45855 1.625C8.36417 1.625 7.28051 1.84055 6.26944 
						2.25935C5.25836 2.67815 4.33968 3.292 3.56584 4.06584C2.003 5.62868 1.125 7.74835 1.125 
						9.95855C1.125 12.1687 2.003 14.2884 3.56584 15.8513C5.12868 17.4141 7.24835 18.2921 9.45855 
						18.2921C11.6687 18.2921 13.7884 17.4141 15.3513 15.8513Z"
							strokeWidth="1.6"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					<Input
						type="search"
						hasOutline={false}
						className={styles.input}
						value={value}
						onChange={handleChange}
						disabled={disabled}
						placeholder={placeholder}
					/>
				</label>
			</form>
		</search>
	);
}

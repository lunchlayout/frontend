import { Icon, Input } from "@shared/ui";
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
		<search>
			<form
				className={[styles.default, className].join(" ")}
				onSubmit={onSubmit}
			>
				<label className={styles.label}>
					<Icon type="primary">
						<svg
							width="21"
							height="21"
							viewBox="0 0 21 21"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15.1654 12.9057H14.2386L13.9101 12.589C14.6433 11.7373 15.1791 10.7341 15.4792 9.6511C15.7794
                                8.56815 15.8364 7.43224 15.6463 6.32466C15.095 3.06346 12.3734 0.459195 9.08873 0.0603435C7.93396
                                    -0.0857468 6.76107 0.0342676 5.65981 0.411203C4.55855 0.788138 3.55812 1.412 2.73506 2.23506C1.912
                                    3.05812 1.28814 4.05855 0.911203 5.15981C0.534268 6.26107 0.414253 7.43396 0.560344 8.58873C0.959195
                                    11.8734 3.56346 14.595 6.82466 15.1463C7.93224 15.3364 9.06815 15.2794 10.1511 14.9792C11.2341 14.6791
                                    12.2373 14.1433 13.089 13.4101L13.4057 13.7386V14.6654L18.3914 19.651C18.8723 20.132 19.6583 20.132
                                        20.1393 19.651C20.6202 19.17 20.6202 18.3841 20.1393 17.9031L15.1654 12.9057ZM8.1268 12.9057C5.20579
                                        12.9057 2.84788 10.5478 2.84788 7.6268C2.84788 4.70579 5.20579 2.34788 8.1268 2.34788C11.0478 2.34788
                                        13.4057 4.70579 13.4057 7.6268C13.4057 10.5478 11.0478 12.9057 8.1268 12.9057Z"
							/>
						</svg>
					</Icon>
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

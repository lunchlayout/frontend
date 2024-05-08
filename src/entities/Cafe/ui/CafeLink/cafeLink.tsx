import { Link } from "@shared/ui";
import styles from "./cafeLink.module.scss";
import { ICafeLinkProps } from "./cafeLink.props";

export default function CafeLink({ cafeId }: ICafeLinkProps) {
	const path = `/cafes/${cafeId}`;
	return (
		<Link to={path} type="primary" className={styles.cafeLink}>
			<svg
				width="26"
				height="28"
				viewBox="0 0 26 28"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M13.0995 7.9094V11.2021C13.0995 11.4129 12.9169 11.5827 12.6916 11.5827H12.5828C12.3575 11.5827 12.1758 11.4129 12.1758 11.2021V7.89414C12.1758 7.35186 11.7844 7.18966 11.4106 7.18966C11.0357 7.18966 10.6452 7.35186 10.6452 7.89414V11.2021C10.6452 11.4129 10.4617 11.5827 10.2374 11.5827H10.1286C9.90424 11.5827 9.72068 11.4129 9.72068 11.2021V7.9094C9.72068 6.93798 8.2396 6.97085 8.2396 7.92034C8.2396 9.05729 8.2396 11.0647 8.2396 11.0647C8.23284 12.8105 8.67856 13.2643 9.41576 13.808C10.0101 14.2462 10.5181 14.4974 10.5181 15.5853V22.5852H12.3032V15.5853C12.3032 14.4974 12.8101 14.2462 13.4045 13.808C14.1417 13.2643 14.5875 12.8105 14.5807 11.0647C14.5807 11.0647 14.5807 9.05723 14.5807 7.92034C14.5807 6.97085 13.0995 6.93798 13.0995 7.9094Z"
					fill="#F6F5F1"
				/>
				<path
					d="M17.9507 8.23714C17.571 9.23092 16.8601 11.6588 16.8601 12.8919C16.761 15.8578 18.3926 14.2681 18.4334 16.5909V22.6046H20.2098L20.2186 22.6261C20.2186 22.6261 20.2186 22.617 20.2186 22.6046C20.2186 22.3254 20.2186 18.9984 20.2186 15.6043C20.2186 12.2469 20.2186 8.82711 20.2186 8.2372C20.2186 7.02554 18.5403 6.69162 17.9507 8.23714Z"
					fill="#F6F5F1"
				/>
				<path d="M25.2446 1.94037C24.9979 1.36899 24.5871 0.885719 24.0694 0.543211C23.8111 0.37193 23.5256 0.236414 23.2196 0.143172C22.9137 0.0499297 22.5892 0 22.2542 0H3.74577C3.29904 0 2.86973 0.0889219 2.48124 0.249758C1.89751 0.492297 1.40417 0.893813 1.05453 1.40044C0.879678 1.65397 0.740781 1.9337 0.645652 2.23333C0.550467 2.53209 0.5 2.85031 0.5 3.17713V24.8228C0.5 25.259 0.590328 25.6791 0.755407 26.0596C1.00211 26.631 1.41293 27.1142 1.92967 27.4567C2.18898 27.628 2.47543 27.764 2.78041 27.8568C3.08629 27.9501 3.4107 28 3.74577 28H22.2542C22.7 28 23.1293 27.9111 23.5177 27.7502C24.1014 27.5081 24.5958 27.1066 24.9444 26.5995C25.1192 26.3465 25.2591 26.0663 25.3533 25.7671C25.4495 25.4683 25.5 25.1501 25.5 24.8228V3.17713C25.5 2.74143 25.4087 2.32088 25.2446 1.94037ZM4.74802 26.3046H3.74577C3.53307 26.3041 3.33594 26.2632 3.15529 26.1885C2.88525 26.0763 2.65218 25.8874 2.48805 25.65C2.40648 25.5316 2.34234 25.4022 2.29868 25.2633C2.25497 25.1249 2.23069 24.9774 2.23069 24.8228V3.17713C2.23069 2.97068 2.27345 2.77802 2.34915 2.60105C2.46376 2.33702 2.65609 2.10875 2.89888 1.94841C3.02024 1.86845 3.15238 1.80518 3.29413 1.76192C3.43593 1.7191 3.58649 1.69575 3.74577 1.69531H4.74808L4.74802 26.3046ZM23.7683 24.8229C23.7683 25.0293 23.7266 25.222 23.6508 25.399C23.5362 25.6634 23.3429 25.8913 23.1011 26.0521C22.9797 26.132 22.8466 26.1948 22.7058 26.2381C22.5631 26.2809 22.4135 26.3043 22.2542 26.3047H5.74453V1.69537H22.2542C22.4659 1.69586 22.6631 1.73726 22.8438 1.81196C23.1147 1.92374 23.3478 2.11307 23.511 2.34998C23.5926 2.46843 23.6577 2.59831 23.7014 2.73667C23.7451 2.87558 23.7684 3.02214 23.7684 3.17718L23.7683 24.8229Z" />
			</svg>
		</Link>
	);
}

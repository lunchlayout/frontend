import { Icon } from "@shared/ui";
import { IDishIconProps } from "./dishIcon.props";
import styles from "./dishIcon.module.scss";

export default function DishIcon({ className = "" }: IDishIconProps) {
	return (
		<Icon className={[styles.default, className].join(' ')} type="primary">
			{
				<svg
					width="56"
					height="50"
					viewBox="0 0 56 50"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M53.2 34.375C53.2 19.9219 43.3804 7.99688 30.8 6.43438V0H25.2V6.43438C12.6196
					7.99688 2.8 19.9219 2.8 34.375V40.625H53.2V34.375ZM8.4 34.375C8.4 22.3156 17.1948
					12.5 28 12.5C38.8052 12.5 47.6 22.3156 47.6 34.375H8.4ZM0 43.75H56V50H0V43.75Z"
					/>
				</svg>
			}
		</Icon>
	);
}

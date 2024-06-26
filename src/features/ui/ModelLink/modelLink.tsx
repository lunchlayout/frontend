import { Button, Link, Modal } from "@shared/ui";
import styles from "./modelLink.module.scss";
import { useLocation } from "react-router-dom";
import { ReactElement, SVGProps } from "react";
import { IModelLinkProps } from "./modelLink.props";
import { Desktop, Mobile } from "@shared/hoc";
import { useModal } from "@shared/hook";
import { ARQRLink } from "@features/ui";
import { DishModelAR } from "@entities/Dish/ui";

export default function ModelLink({ className = "" }: IModelLinkProps) {
	const { close, isShown, open } = useModal();

	let { pathname } = useLocation();
	const lastIndex = pathname.lastIndexOf("/") + 1;
	const location = pathname.slice(lastIndex);

	let linkSvg: ReactElement<SVGProps<SVGSVGElement>>;
	let linkText: string;
	if (location === "model") {
		linkText = "Перейти в AR";
		linkSvg = (
			<svg
				width="36"
				height="36"
				viewBox="0 0 36 36"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={styles.linkARSvg}
			>
				<path d="M16.4289 31.562L6.93222 26.0456C6.43963 25.7643 6.05463 25.3799 5.77722 24.8925C5.49982 24.4051 5.36111 23.8833 5.36111 23.3272V12.2964C5.36111 11.7403 5.49982 11.2185 5.77722 10.7311C6.05593 10.2437 6.44093 9.85936 6.93222 9.57807L16.4289 4.06362C16.9215 3.78103 17.4452 3.63973 18 3.63973C18.5548 3.63973 19.0785 3.78103 19.5711 4.06362L29.0678 9.57807C29.5604 9.85936 29.9454 10.2437 30.2228 10.7311C30.5002 11.2185 30.6389 11.7403 30.6389 12.2964V23.3272C30.6389 23.8846 30.5002 24.4064 30.2228 24.8925C29.9441 25.3799 29.5591 25.7643 29.0678 26.0456L19.5711 31.562C19.0785 31.8433 18.5548 31.9839 18 31.9839C17.4452 31.9839 16.9215 31.8433 16.4289 31.562ZM0.5 7.97779V3.34029C0.5 2.47177 0.805926 1.73094 1.41778 1.11779C2.02963 0.505938 2.77046 0.200012 3.64028 0.200012H8.27778V2.14446H3.64028C3.29157 2.14446 3.00509 2.25659 2.78083 2.48085C2.55657 2.7051 2.44444 2.99159 2.44444 3.34029V7.97779H0.5ZM8.27778 35.2H3.64028C2.77176 35.2 2.03093 34.8941 1.41778 34.2822C0.805926 33.6704 0.5 32.9295 0.5 32.0597V27.4222H2.44444V32.0597C2.44444 32.4084 2.55657 32.6949 2.78083 32.9192C3.00509 33.1434 3.29157 33.2556 3.64028 33.2556H8.27778V35.2ZM27.7222 35.2V33.2556H32.3597C32.7084 33.2556 32.9949 33.1434 33.2192 32.9192C33.4434 32.6949 33.5556 32.4084 33.5556 32.0597V27.4222H35.5V32.0597C35.5 32.9283 35.1941 33.6691 34.5822 34.2822C33.9704 34.8941 33.2295 35.2 32.3597 35.2H27.7222ZM33.5556 7.97779V3.34029C33.5556 2.99159 33.4434 2.7051 33.2192 2.48085C32.9949 2.25659 32.7084 2.14446 32.3597 2.14446H27.7222V0.200012H32.3597C33.2282 0.200012 33.9691 0.505938 34.5822 1.11779C35.1941 1.72964 35.5 2.47047 35.5 3.34029V7.97779H33.5556ZM8.30111 11.0558L7.30556 11.6236V12.802L17.0278 18.332V29.6681L18 30.2261L18.9722 29.67V18.332L28.6944 12.802V11.6236L27.6989 11.0558L18 16.6597L8.30111 11.0558Z" />
			</svg>
		);
	} else {
		pathname = pathname + "/model";
		linkText = "Перейти в 3D";
		linkSvg = (
			<svg
				width="36"
				height="36"
				viewBox="0 0 38 39"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={styles.link3DSvg}
			>
				<path
					d="M19 10.1137V20.0057M19 20.0057L9.27773 24.9518M19 20.0057L28.7222 24.9518M19 2.20001L36.5 11.1029V26.6235C36.5 27.3181 36.2925 28.0004 35.8983 28.6019C35.5042 29.2034 34.9373 29.7029 34.2547 30.0501L21.2453 36.6699C20.5627 37.0172 19.7883 37.2 19 37.2C18.2117 37.2 17.4373 37.0172 16.7547 36.6699L3.74532 30.0501C3.06267 29.7029 2.49579 29.2034 2.10166 28.6019C1.70753 28.0004 1.50002 27.3181 1.5 26.6235V11.1029L19 2.20001Z"
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	}

	return (
		<>
			<div className={[styles.default, className].join(" ")}>
				<Desktop>
					{location === "model" && (
						<Button
							onClick={open}
							customType="outlined"
							className={styles.modelLink}
						>
							{linkSvg}
						</Button>
					)}
					{location !== "model" && (
						<Link
							to={pathname}
							type="outlined"
							className={styles.modelLink}
						>
							{linkSvg}
						</Link>
					)}
				</Desktop>
				<Mobile>
					{location === "model" && (
						<DishModelAR>
							<Button
								slot="ar-button"
								customType="outlined"
								className={[
									styles.modelLink,
									styles.arLink,
								].join(" ")}
							>
								{linkSvg}
							</Button>
						</DishModelAR>
					)}
					{location !== "model" && (
						<Link
							to={pathname}
							type="outlined"
							className={styles.modelLink}
						>
							{linkSvg}
						</Link>
					)}
				</Mobile>
				<span className={styles.label}>{linkText}</span>
			</div>
			<Modal onClose={close} isOpen={isShown}>
				<ARQRLink />
			</Modal>
		</>
	);
}

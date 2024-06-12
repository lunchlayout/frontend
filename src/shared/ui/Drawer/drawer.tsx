import { IDrawerProps } from "./drawer.props";
import styles from "./drawer.module.scss";
import { createPortal } from "react-dom";
import { APP_ROOT } from "@app/consts";
import { useEffect, useRef } from "react";

export default function Drawer({
	onClose,
	open = false,
	className = "",
	children,
}: IDrawerProps) {
	const drawerRef = useRef<HTMLElement | null>(null);

	const containerRef = useRef<HTMLElement | null>(null);

	function closeDrawerOnOutsideClick({ target }: globalThis.MouseEvent) {
		if (target instanceof HTMLElement) {
			const isDrawer = target === drawerRef.current;
			const isDrawerChildren = drawerRef.current?.contains(target);
			const isOutsideOfDrawer = !(
				isDrawer ||
				isDrawerChildren ||
				target.tagName === "BUTTON"
			);
			if (isOutsideOfDrawer && onClose) {
				onClose();
			}
		}
	}

	useEffect(() => {
		document.body.addEventListener("click", closeDrawerOnOutsideClick);

		return () => {
			document.body.removeEventListener(
				"click",
				closeDrawerOnOutsideClick,
			);
		};
	}, []);

	function setChildrenInert(root: HTMLElement, inert: boolean) {
		if (containerRef.current) {
			for (const el of root.children) {
				if (el instanceof HTMLElement && el !== containerRef.current) {
					el.inert = inert;
				}
			}
		}
	}

	useEffect(() => {
		const root = containerRef.current?.parentElement;

		if (root) {
			setChildrenInert(root, open);
		}
		return () => {
			if (root) {
				setChildrenInert(root, open);
			}
		};
	}, [open]);

	return (
		<>
			{APP_ROOT &&
				createPortal(
					<section
						ref={containerRef}
						className={[
							styles.default,
							open ? styles.visible : styles.hidden,
						].join(" ")}
					>
						<aside
							ref={drawerRef}
							className={[styles.container, className].join(" ")}
						>
							<span className={styles.title}>Меню</span>
							<div className={styles.content}>{children}</div>
						</aside>
					</section>,
					APP_ROOT,
				)}
		</>
	);
}

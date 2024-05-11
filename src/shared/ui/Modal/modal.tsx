import { IModalProps } from "./modal.props";
import styles from "./modal.module.scss";
import { createPortal } from "react-dom";
import { CloseButton } from "@shared/ui";
import { useEffect, useRef } from "react";

export default function Modal({
	children,
	container = document.body,
	className = "",
	isOpen = false,
	onClose,
	label = "Модальное окно",
}: IModalProps) {
	const dialogRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	console.log(1);
	function closeDialogOnOutsideClick({ target }: MouseEvent) {
		if (target instanceof HTMLElement) {
			const isDialog = target === dialogRef.current;
			const isDialogChildren = dialogRef.current?.contains(target);
			const isOutsideOfDialog = !(isDialog || isDialogChildren);

			if (isOutsideOfDialog && onClose) {
				onClose();
			}
		}
	}

	useEffect(() => {
		document.body.addEventListener("click", closeDialogOnOutsideClick);

		return () => {
			document.body.removeEventListener(
				"click",
				closeDialogOnOutsideClick,
			);
		};
	}, []);

	function setChildrenInert(root: HTMLElement, inert: boolean) {
		for (const el of root.children) {
			if (el instanceof HTMLElement && el !== containerRef.current) {
				el.inert = inert;
			}
		}
	}

	useEffect(() => {
		const root = containerRef.current?.parentElement;
		if (root) {
			setChildrenInert(root, true);
		}
		return () => {
			if (root) {
				setChildrenInert(root, false);
			}
		};
	}, [isOpen]);

	const modal = (
		<div className={styles.default} ref={containerRef}>
			<div aria-hidden className={styles.overlay}></div>
			<div
				ref={dialogRef}
				role="dialog"
				aria-modal
				aria-live="assertive"
				aria-label={label}
				className={[styles.modal, className].join(" ")}
			>
				{children}
				<CloseButton onClick={onClose} className={styles.close} />
			</div>
		</div>
	);
	return <>{isOpen && createPortal(modal, container)}</>;
}

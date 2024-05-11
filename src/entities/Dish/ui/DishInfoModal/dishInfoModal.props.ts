import { IModalProps } from "@shared/ui/Modal/modal.props";

export interface IDishInfoModalProps
	extends Required<Pick<IModalProps, "isOpen" | "onClose">> {}

import { IButtonProps } from "../Button/button.props";

type DirectionType = "left" | "right";

export interface IButtonControllerProps
	extends Partial<Omit<IButtonProps, "type" | "formId" | "customType">> {
	direction?: DirectionType;
}

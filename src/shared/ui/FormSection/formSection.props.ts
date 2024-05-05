import { ReactNode } from "react";
import { IDefaultProps } from "@shared/types";

export interface IFormSectionProps extends IDefaultProps {
	title: string;
	children: ReactNode;
}

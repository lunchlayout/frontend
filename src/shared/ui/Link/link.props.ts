import { IDefaultProps } from "@shared/types";
import { ReactNode } from "react";

type LinkType = "primary" | "secondary" | "tertiary" | "simple" | "text";

export interface ILinkProps extends IDefaultProps {
	to: string;
	type?: LinkType;
	children: ReactNode;
}

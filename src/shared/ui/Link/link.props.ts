import { IDefaultProps } from "@shared/types";
import { ReactNode } from "react";

type LinkType = "outlined" | "text" | "underlined" | "none";

export interface ILinkProps extends IDefaultProps {
	to: string;
	type?: LinkType;
	children: ReactNode;
}

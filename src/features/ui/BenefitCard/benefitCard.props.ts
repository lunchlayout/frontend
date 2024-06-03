import { IDefaultProps } from "@shared/types";
import { ReactNode } from "react";

interface IBenefit {
	title: string;
	description: string;
	icon?: ReactNode;
}

interface IBenefitCardProps extends IDefaultProps, IBenefit {}

export type { IBenefit, IBenefitCardProps };

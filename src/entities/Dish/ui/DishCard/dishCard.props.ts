import { IDishWithId } from "@entities/Dish/types";
import { IDefaultProps } from "@shared/types";


export interface IDishCardProps extends IDefaultProps, Pick<IDishWithId, 'name' | 'img' | 'amount' | 'unit'> {}
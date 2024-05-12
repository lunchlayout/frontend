import { Entertainment } from "./entertainment";
import { IModel } from "./model";

type Unit = "мл" | "г";

interface INutritionalValue {
	calories: number;
	proteins: number;
	fats: number;
	carbohydrates: number;
}

interface IDish extends IModel {
	name: string;
	description: string;
	amount: number;
	unit: Unit;
	img: string;
	ingredients: string[];
	allergens: string[];
	nutritionalValue: INutritionalValue;
}
interface IDishWithEntertainment extends IDish {
	entertainment: Entertainment;
}

interface IDishWithCafeId extends IDishWithEntertainment {
	cafeId: string;
}

interface IDishWithId extends IDishWithEntertainment {
	dishId: string;
}

export type { IDish, INutritionalValue, IDishWithId, IDishWithCafeId };

import { IContent } from "./content";

type Unit = "мл" | "г";

interface INutritionalValue {
	calories: number;
	proteins: number;
	fats: number;
	carbohydrates: number;
}

interface IDish {
	name: string;
	description: string;
	amount: number;
	unit: Unit;
	img: string;
	ingredients: string[];
	allergens: string[];
	nutritionalValue: INutritionalValue;
}
interface IDishWithContent extends IDish {
	content: IContent;
}

interface IDishWithCafeId extends IDishWithContent {
	cafeId: string;
}

interface IDishWithId extends IDishWithContent {
	dishId: string;
}

export type { IDish, INutritionalValue, IDishWithId, IDishWithCafeId };

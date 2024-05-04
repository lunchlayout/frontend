type Unit = "мл" | "г"

interface INutritionalValue {
    calories: number,
    proteins: number,
    fats: number,
    carbohydrates: number
}

interface IDish {
    name: string,
    description: string,
    amount: number,
    unit: Unit,
    img: string,
    ingredients: string[],
    allergens: string[],
    nutritionalValue: INutritionalValue
}

interface IDishWithCafeId extends IDish {
    cafeId: string
}

interface IDishWithId extends IDish {
    dishId: string
}

export type {IDish, INutritionalValue, IDishWithId, IDishWithCafeId}
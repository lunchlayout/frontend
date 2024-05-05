import { IRootState } from "@app/types";

const dish = (state: IRootState) => state.dishes.dish;

const dishContent = (state: IRootState) => state.dishes.dish?.content;

export { dish, dishContent };

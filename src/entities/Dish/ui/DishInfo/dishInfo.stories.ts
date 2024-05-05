import type { Meta, StoryObj } from "@storybook/react";
import DishInfo from "./dishInfo";

const meta = {
	component: DishInfo,
	title: "Entities/DishInfo",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DishInfo>;

type Story = StoryObj<typeof DishInfo>;

export const DishInfoSimple: Story = {
	parameters: {
		docs: {
			description: {
				story: "simple dish info",
			},
		},
	},
	args: {
		description:
			"Нежный клубничный торт - сладкая симфония ароматной клубники",
		allergens: ["Сахар"],
		ingredients: ["Сливки", "Клубника"],
		nutritionalValue: {
			fats: 200,
			calories: 450,
			carbohydrates: 250,
			proteins: 50,
		},
		amount: 1000,
		unit: "г",
		img: "https://rsute.ru/wp-content/uploads/2020/12/maxresdefault-59.jpg",
	},
};

export default meta;

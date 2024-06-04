import type { Meta, StoryObj } from "@storybook/react";
import DishCard from "./dishCard";

const meta = {
	component: DishCard,
	title: "Entities/DishCard",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DishCard>;

type Story = StoryObj<typeof DishCard>;

export const DishCardSimple: Story = {
	args: {
		name: "Греческий салат с авокадо и тунцом",
		amount: 400,
		unit: "г",
		description:
			"Изумительный салат, в состав которого входят самые свежие продукты",
		img: "https://bye-bye-calories.ru/wp-content/uploads/1/c/1/1c14a5995fbf1b48e341e5fee35c1d55.jpeg",
	},
};

export default meta;

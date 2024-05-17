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
		name: "Клубничный торт",
		amount: 1000,
		unit: "г",
		img: "https://rsute.ru/wp-content/uploads/2020/12/maxresdefault-59.jpg",
	},
};

export default meta;

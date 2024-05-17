import type { Meta, StoryObj } from "@storybook/react";
import DishQuiz from "./dishQuiz";

const meta = {
	component: DishQuiz,
	title: "Entities/DishQuiz",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DishQuiz>;

type Story = StoryObj<typeof DishQuiz>;

export const DishQuizSimple: Story = {

	args: {
		answer: "3",
		options: ["2", "3", "5"],
		question: "Сколько видов мяса в мясной пицце",
	},
};

export default meta;

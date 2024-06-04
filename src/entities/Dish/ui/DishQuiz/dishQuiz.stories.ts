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
		answer: "Бариста",
		options: ["Кофевар", "Кофе-мастер", "Бариста", "Молокосос"],
		question: "Как называется человек, который готовит кофе?",
	},
};

export default meta;

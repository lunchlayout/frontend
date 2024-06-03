import type { Meta, StoryObj } from "@storybook/react";
import QuizOption from "./quizOption";
import { fn } from "@storybook/test";

const meta = {
	component: QuizOption,
	title: "Features/QuizOption",
	tags: ["autodocs"],
	args: {
		onChange: fn(),
	},
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof QuizOption>;

type Story = StoryObj<typeof QuizOption>;

export const QuizOptionDefault: Story = {
	args: {
		option: "Кофевар",
	},
};
export const QuizOptionSelected: Story = {
	args: {
		option: "Кофе-мастер",
		checked: true,
	},
};
export const QuizOptionCorrect: Story = {
	args: {
		option: "Бариста",
		type: "correct",
	},
};
export const QuizOptionWrong: Story = {
	args: {
		option: "Молокосос",
		type: "wrong",
	},
};

export default meta;

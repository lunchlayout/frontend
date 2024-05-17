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
		children: "Наполеoн",
	},
};
export const QuizOptionSelected: Story = {
	args: {
		children: "Наполеoн",
		checked: true,
	},
};
export const QuizOptionCorrect: Story = {
	args: {
		children: "Наполеoн",
		type: "correct",
	},
};
export const QuizOptionWrong: Story = {
	args: {
		children: "Наполеoн",
		type: "wrong",
	},
};

export default meta;

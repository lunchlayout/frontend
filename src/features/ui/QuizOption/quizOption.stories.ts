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
	parameters: {
		docs: {
			description: {
				story: "default quiz option",
			},
		},
	},
	args: {
		children: "Наполеoн",
	},
};
export const QuizOptionSelected: Story = {
	parameters: {
		docs: {
			description: {
				story: "selected quiz option",
			},
		},
	},
	args: {
		children: "Наполеoн",
		checked: true,
	},
};
export const QuizOptionCorrect: Story = {
	parameters: {
		docs: {
			description: {
				story: "correct quiz option",
			},
		},
	},
	args: {
		children: "Наполеoн",
		type: "correct",
	},
};
export const QuizOptionWrong: Story = {
	parameters: {
		docs: {
			description: {
				story: "wrong quiz option",
			},
		},
	},
	args: {
		children: "Наполеoн",
		type: "wrong",
	},
};

export default meta;

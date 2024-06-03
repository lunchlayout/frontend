import type { Meta, StoryObj } from "@storybook/react";
import ReviewForm from "./reviewForm";

const meta = {
	component: ReviewForm,
	title: "Widgets/ReviewForm",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof ReviewForm>;

type Story = StoryObj<typeof ReviewForm>;

export const ReviewFormSimple: Story = {
	args: {},
};
export const ReviewFormWithoutControl: Story = {
	args: {
		hasControl: false,
	},
};

export default meta;

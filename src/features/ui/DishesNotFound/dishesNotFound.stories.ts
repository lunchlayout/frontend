import type { Meta, StoryObj } from "@storybook/react";
import DishesNotFound from "./dishesNotFound";

const meta = {
	component: DishesNotFound,
	title: "Features/DishesNotFound",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DishesNotFound>;

type Story = StoryObj<typeof DishesNotFound>;

export const DishesNotFoundSimple: Story = {
	parameters: {
		docs: {
			description: {
				story: "simple dishes not found",
			},
		},
	},
	args: {},
};

export default meta;
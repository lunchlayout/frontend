import type { Meta, StoryObj } from "@storybook/react";
import DishList from "./mockProvider";

const meta = {
	component: DishList,
	title: "Entities/DishList",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DishList>;

type Story = StoryObj<typeof DishList>;

export const DishListSimple: Story = {
	parameters: {
		docs: {
			description: {
				story: "simple dish list",
			},
		},
	},
	args: {},
};

export default meta;
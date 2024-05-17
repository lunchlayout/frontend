import type { Meta, StoryObj } from "@storybook/react";
import DishInfo from "./mockProvider";

const meta = {
	component: DishInfo,
	title: "Entities/DishInfo",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DishInfo>;

type Story = StoryObj<typeof DishInfo>;

export const DishInfoSimple: Story = {

	args: {},
};

export default meta;

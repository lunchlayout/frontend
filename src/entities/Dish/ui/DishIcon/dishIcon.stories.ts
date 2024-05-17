import type { Meta, StoryObj } from "@storybook/react";
import DishIcon from "./dishIcon";

const meta = {
	component: DishIcon,
	title: "Entities/DishIcon",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DishIcon>;

type Story = StoryObj<typeof DishIcon>;

export const DishIconSimple: Story = {
	args: {},
};

export default meta;

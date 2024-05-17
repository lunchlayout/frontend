import type { Meta, StoryObj } from "@storybook/react";
import DishesPanel from "./mockProvider";

const meta = {
	component: DishesPanel,
	title: "Widgets/DishesPanel",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DishesPanel>;

type Story = StoryObj<typeof DishesPanel>;

export const DishesPanelSimple: Story = {
	args: {},
};

export default meta;

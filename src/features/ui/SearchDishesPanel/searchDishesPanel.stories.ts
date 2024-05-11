import type { Meta, StoryObj } from "@storybook/react";
import SearchDishesPanel from "./mockProvider";

const meta = {
	component: SearchDishesPanel,
	title: "Features/SearchDishesPanel",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof SearchDishesPanel>;

type Story = StoryObj<typeof SearchDishesPanel>;

export const SearchDishesPanelSimple: Story = {
	parameters: {
		docs: {
			description: {
				story: "simple search dishes panel",
			},
		},
	},
	args: {},
};

export default meta;
import type { Meta, StoryObj } from "@storybook/react";
import SearchPanel from "./mockProvider";

const meta = {
	component: SearchPanel,
	title: "Shared/SearchPanel",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof SearchPanel>;

type Story = StoryObj<typeof SearchPanel>;

export const SearchPanelSimple: Story = {
	args: {},
};

export default meta;

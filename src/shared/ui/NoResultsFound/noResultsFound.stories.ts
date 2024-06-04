import type { Meta, StoryObj } from "@storybook/react";
import NoResultsFound from "./noResultsFound";

const meta = {
	component: NoResultsFound,
	title: "Shared/NoResultsFound",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof NoResultsFound>;

type Story = StoryObj<typeof NoResultsFound>;

export const NoResultsFoundSimple: Story = {
	args: {
		label: "Блюд пока нет...",
	},
};

export default meta;

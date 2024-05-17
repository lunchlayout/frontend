import type { Meta, StoryObj } from "@storybook/react";
import ProgressPanel from "./mockProvider";

const meta = {
	component: ProgressPanel,
	title: "Features/ProgressPanel",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof ProgressPanel>;

type Story = StoryObj<typeof ProgressPanel>;

export const ProgressPanelSimple: Story = {
	args: {},
};

export default meta;

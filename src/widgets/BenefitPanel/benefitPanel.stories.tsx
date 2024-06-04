import type { Meta, StoryObj } from "@storybook/react";
import BenefitPanel from "./benefitPanel";

const meta = {
	component: BenefitPanel,
	title: "Widgets/BenefitPanel",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof BenefitPanel>;

type Story = StoryObj<typeof BenefitPanel>;

export const BenefitPanelSimple: Story = {
	args: {},
};

export default meta;

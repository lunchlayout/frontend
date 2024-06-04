import type { Meta, StoryObj } from "@storybook/react";
import BenefitList from "./benefitList";

const meta = {
	component: BenefitList,
	title: "Features/BenefitList",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof BenefitList>;

type Story = StoryObj<typeof BenefitList>;

export const BenefitListSimple: Story = {
	args: {},
};

export default meta;

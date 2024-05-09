import type { Meta, StoryObj } from "@storybook/react";
import MobileReviewFooter from "./mobileReviewFooter";

const meta = {
	component: MobileReviewFooter,
	title: "Widgets/MobileReviewFooter",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof MobileReviewFooter>;

type Story = StoryObj<typeof MobileReviewFooter>;

export const MobileReviewFooterSimple: Story = {
	args: {},
};

export default meta;

import type { Meta, StoryObj } from "@storybook/react";
import MobileReviewControl from "./mobileReviewControl";

const meta = {
	component: MobileReviewControl,
	title: "Widgets/MobileReviewControl",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof MobileReviewControl>;

type Story = StoryObj<typeof MobileReviewControl>;

export const MobileReviewControlSimple: Story = {
	args: {},
};

export default meta;

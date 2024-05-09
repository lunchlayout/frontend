import type { Meta, StoryObj } from "@storybook/react";
import MobileReviewHeader from "./mobileReviewHeader";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: MobileReviewHeader,
	title: "Widgets/MobileReviewHeader",
	decorators: [withRouter()],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof MobileReviewHeader>;

type Story = StoryObj<typeof MobileReviewHeader>;

export const MobileReviewHeaderSimple: Story = {
	args: {},
};

export default meta;

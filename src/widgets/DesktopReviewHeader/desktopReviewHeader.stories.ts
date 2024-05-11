import type { Meta, StoryObj } from "@storybook/react";
import DesktopReviewHeader from "./desktopReviewHeader";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: DesktopReviewHeader,
	title: "Widgets/DesktopReviewHeader",
	decorators: [withRouter()],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DesktopReviewHeader>;

type Story = StoryObj<typeof DesktopReviewHeader>;

export const DesktopReviewHeaderSimple: Story = {
	args: {},
};

export default meta;

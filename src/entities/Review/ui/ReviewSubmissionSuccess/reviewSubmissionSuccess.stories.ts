import type { Meta, StoryObj } from "@storybook/react";
import ReviewSubmissionSuccess from "./reviewSubmissionSuccess";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: ReviewSubmissionSuccess,
	decorators: [withRouter()],
	title: "Entities/ReviewSubmissionSuccess",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof ReviewSubmissionSuccess>;

type Story = StoryObj<typeof ReviewSubmissionSuccess>;

export const ReviewSubmissionSuccessSimple: Story = {
	args: {},
};

export default meta;

import type { Meta, StoryObj } from "@storybook/react";
import CommonHeader from "./commonHeader";
import { withRouter } from "storybook-addon-remix-react-router";
import { Provider } from "react-redux";
import { mockStore } from "@app/model";

const meta = {
	component: CommonHeader,
	title: "Widgets/CommonHeader",
	decorators: [
		Story => (
			<Provider store={mockStore}>
				<Story />
			</Provider>
		),
		withRouter(),
	],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof CommonHeader>;

type Story = StoryObj<typeof CommonHeader>;

export const CommonHeaderSimple: Story = {
	args: {},
};

export default meta;

import type { Meta, StoryObj } from "@storybook/react";
import CafeList from "./cafeList";
import { mockStore } from "@app/model";
import { Provider } from "react-redux";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: CafeList,
	title: "Entities/CafeList",
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
} satisfies Meta<typeof CafeList>;

type Story = StoryObj<typeof CafeList>;

export const CafeListSimple: Story = {
	args: {},
};

export default meta;

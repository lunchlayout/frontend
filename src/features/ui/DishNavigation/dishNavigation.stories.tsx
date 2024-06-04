import type { Meta, StoryObj } from "@storybook/react";
import DishNavigation from "./dishNavigation";
import { withRouter } from "storybook-addon-remix-react-router";
import { Provider } from "react-redux";
import { mockStore } from "@app/model";

const meta = {
	component: DishNavigation,
	title: "Features/DishNavigation",
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
} satisfies Meta<typeof DishNavigation>;

type Story = StoryObj<typeof DishNavigation>;

export const DishNavigationSimple: Story = {
	args: {},
};

export default meta;

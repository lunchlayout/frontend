import type { Meta, StoryObj } from "@storybook/react";
import DishControl from "./dishControl";
import { withRouter } from "storybook-addon-remix-react-router";
import { Provider } from "react-redux";
import { mockStore } from "@app/model";

const meta = {
	component: DishControl,
	decorators: [
		Story => (
			<Provider store={mockStore}>
				<Story />
			</Provider>
		),
		withRouter(),
	],
	title: "Widgets/DishControl",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DishControl>;

type Story = StoryObj<typeof DishControl>;

export const DishControlSimple: Story = {
	args: {},
};

export default meta;

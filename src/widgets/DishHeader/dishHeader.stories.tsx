import type { Meta, StoryObj } from "@storybook/react";
import DishHeader from "./dishHeader";
import { withRouter } from "storybook-addon-remix-react-router";
import { Provider } from "react-redux";
import { mockStore } from "@app/model";

const meta = {
	component: DishHeader,
	title: "Widgets/DishHeader",
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
} satisfies Meta<typeof DishHeader>;

type Story = StoryObj<typeof DishHeader>;

export const DishHeaderSimple: Story = {
	args: {},
};

export default meta;

import type { Meta, StoryObj } from "@storybook/react";
import SearchDishByIdForm from "./searchDishByIdForm";
import { withRouter } from "storybook-addon-remix-react-router";
import { Provider } from "react-redux";
import { mockStore } from "@app/model";

const meta = {
	component: SearchDishByIdForm,
	decorators: [
		Story => (
			<Provider store={mockStore}>
				<Story />
			</Provider>
		),
		withRouter(),
	],
	title: "Features/SearchDishByIdForm",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof SearchDishByIdForm>;

type Story = StoryObj<typeof SearchDishByIdForm>;

export const SearchDishByIdFormSimple: Story = {
	args: {},
};

export default meta;

import type { Meta, StoryObj } from "@storybook/react";
import DishEntertainmentPanel from "./dishEntertainmentPanel";
import { withRouter } from "storybook-addon-remix-react-router";
import { Provider } from "react-redux";
import { mockStore } from "@app/model";

const meta = {
	component: DishEntertainmentPanel,
	title: "Widgets/DishEntertainmentPanel",
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
} satisfies Meta<typeof DishEntertainmentPanel>;

type Story = StoryObj<typeof DishEntertainmentPanel>;

export const DishEntertainmentPanelSimple: Story = {
	args: {},
};

export default meta;

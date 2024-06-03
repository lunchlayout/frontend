import type { Meta, StoryObj } from "@storybook/react";
import CafesPanel from "./cafesPanel";
import { Provider } from "react-redux";
import { mockStore } from "@app/model";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: CafesPanel,
	decorators: [
		Story => (
			<Provider store={mockStore}>
				<Story />
			</Provider>
		),
		withRouter(),
	],
	title: "Widgets/CafesPanel",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof CafesPanel>;

type Story = StoryObj<typeof CafesPanel>;

export const CafesPanelSimple: Story = {
	args: {},
};

export default meta;

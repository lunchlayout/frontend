import type { Meta, StoryObj } from "@storybook/react";
import EntertainmentSlider from "./entertainmentSlider";
import { Provider } from "react-redux";
import { mockStore } from "@app/model";

const meta = {
	component: EntertainmentSlider,
	decorators: [
		Story => (
			<Provider store={mockStore}>
				<Story />
			</Provider>
		),
	],
	title: "Entities/EntertainmentSlider",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof EntertainmentSlider>;

type Story = StoryObj<typeof EntertainmentSlider>;

export const EntertainmentSliderSimple: Story = {
	args: {},
};

export default meta;

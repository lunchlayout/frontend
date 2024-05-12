import type { Meta, StoryObj } from "@storybook/react";
import EntertainmentSlider from "./mockProvider";

const meta = {
	component: EntertainmentSlider,
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

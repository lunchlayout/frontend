import type { Meta, StoryObj } from "@storybook/react";
import MainLogo from "./mainLogo";

const meta = {
	component: MainLogo,
	title: "Features/MainLogo",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof MainLogo>;

type Story = StoryObj<typeof MainLogo>;

export const MainLogoMobile: Story = {
	args: {
		device: "mobile",
	},
};
export const MainLogoTablet: Story = {
	args: {
		device: "tablet",
	},
};
export const MainLogoDesktop: Story = {
	args: {
		device: "desktop",
	},
};

export default meta;

import type { Meta, StoryObj } from "@storybook/react";
import CafeLogo from "./mockProvider";

const meta = {
	component: CafeLogo,
	title: "Entities/CafeLogo",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof CafeLogo>;

type Story = StoryObj<typeof CafeLogo>;

export const CafeLogoMobile: Story = {
	args: {
		device: "mobile",
	},
};
export const CafeLogoTablet: Story = {
	args: {
		device: "tablet",
	},
};
export const CafeLogoDesktop: Story = {
	args: {
		device: "desktop",
	},
};

export default meta;

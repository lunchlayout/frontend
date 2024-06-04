import type { Meta, StoryObj } from "@storybook/react";
import CafeLogo from "./cafeLogo";

const meta = {
	component: CafeLogo,
	title: "Entities/CafeLogo",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof CafeLogo>;

type Story = StoryObj<typeof CafeLogo>;

export const CafeLogoSimple: Story = {
	args: {
		width: 40,
		name: "Кекс и крендель",
		logo: "https://img.hhcdn.ru/employer-logo/2422482.jpeg",
	},
};

export default meta;

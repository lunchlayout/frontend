import type { Meta, StoryObj } from "@storybook/react";
import CafeInfo from "./cafeInfo";

const meta = {
	component: CafeInfo,
	title: "Entities/CafeInfo",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof CafeInfo>;

type Story = StoryObj<typeof CafeInfo>;

export const CafeInfoSimple: Story = {
	args: {
		name: "Кекс и крендель",
		logo: "https://img.hhcdn.ru/employer-logo/2422482.jpeg",
	},
};

export default meta;

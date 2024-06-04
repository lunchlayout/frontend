import type { Meta, StoryObj } from "@storybook/react";
import BurgerButton from "./burgerButton";

const meta = {
	component: BurgerButton,
	title: "Shared/BurgerButton",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof BurgerButton>;

type Story = StoryObj<typeof BurgerButton>;

export const BurgerButtonSimple: Story = {
	args: {},
};

export default meta;

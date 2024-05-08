import type { Meta, StoryObj } from "@storybook/react";
import CloseButton from "./closeButton";

const meta = {
	component: CloseButton,
	title: "Shared/CloseButton",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof CloseButton>;

type Story = StoryObj<typeof CloseButton>;

export const ButtonClosePrimary: Story = {
	parameters: {
		docs: {
			description: {
				story: "primary button",
			},
		},
	},
	args: {
		customType: "primary",
	},
};
export const ButtonCloseSecondary: Story = {
	parameters: {
		docs: {
			description: {
				story: "secondary button",
			},
		},
	},
	args: {
		customType: "secondary",
	},
};
export const ButtonCloseTertiary: Story = {
	parameters: {
		docs: {
			description: {
				story: "tertiary button",
			},
		},
	},
	args: {
		customType: "tertiary",
	},
};
export const ButtonCloseSimple: Story = {
	parameters: {
		docs: {
			description: {
				story: "simple button",
			},
		},
	},
	args: {
		customType: "simple",
	},
};
export const ButtonDisabled: Story = {
	parameters: {
		docs: {
			description: {
				story: "disabled button",
			},
		},
	},
	args: {
		customType: "primary",
		disabled: true,
	},
};

export default meta;

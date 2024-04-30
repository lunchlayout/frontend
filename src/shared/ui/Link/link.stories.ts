import type {Meta, StoryObj} from '@storybook/react'
import Link from './link'


const meta = {
    component: Link,
    title: 'Shared/Link',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof Link>

type Story = StoryObj<typeof Link>;

export const LinkPrimary: Story = {
    parameters: {
      docs: {
        description: {
            story: "primary link"
        },
      },
    },
    args: {
        type: "primary",
        children: "Ввести код"
    }
}
export const LinkSecondary: Story = {
    parameters: {
      docs: {
        description: {
            story: "secondary link"
        },
      },
    },
    args: {
        type: 'secondary',
        children: "Ввести код"
    }
}
export const LinkTertiary: Story = {
    parameters: {
      docs: {
        description: {
            story: "tertiary link",
        },
      },
    },
    args: {
        type: 'tertiary',
        children: "Ввести код"
    }
}
export const LinkSimple: Story = {
  parameters: {
    docs: {
      description: {
          story: "simple link"
      },
    },
  },
  args: {
      type: "simple",
      children: "Ввести код"
  }
}

export default meta;
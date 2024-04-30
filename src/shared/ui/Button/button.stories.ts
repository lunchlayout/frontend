import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import Button from './button';

const meta = {
    component: Button,
    title: 'Shared/Button',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    args: {
      onClick: fn()
    },
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof Button>;

export const ButtonPrimary: Story = {
    parameters: {
      docs: {
        description: {
            story: "primary button"
        },
      },
    },
    args: {
        children: "Продолжить",
        type: 'primary'
        
    }
}
export const ButtonSecondary: Story = {
    parameters: {
      docs: {
        description: {
            story: "secondary button"
        },
      },
    },
    args: {
        children: "Продолжить",
        type: 'secondary'
        
    }
}
export const ButtonTertiary: Story = {
    parameters: {
      docs: {
        description: {
            story: "tertiary button"
        },
      },
    },
    args: {
        children: "Продолжить",
        type: 'tertiary'
        
    }
}
export const ButtonSimple: Story = {
  parameters: {
    docs: {
      description: {
          story: "simple button"
      },
    },
  },
  args: {
      children: "Продолжить",
      type: 'simple'
      
  }
}

export default meta;
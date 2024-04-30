import type {Meta, StoryObj} from '@storybook/react'
import Title from './title'
const meta = {
    component: Title,
    title: 'Shared/Title',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof Title>

type Story = StoryObj<typeof Title>;

export const Title1: Story = {
    parameters: {
      docs: {
        description: {
            story: "title with 1st level"
        },
      },
    },
    args: {
        level: 1,
        children: "Lunch Layout"
    }
}
export const Title2: Story = {
  parameters: {
    docs: {
      description: {
          story: "title with 2nd level"
      },
    },
  },
  args: {
      level: 2,
      children: "Lunch Layout"
  }
}
export const Title3: Story = {
  parameters: {
    docs: {
      description: {
          story: "title with 3rd level"
      },
    },
  },
  args: {
      level: 3,
      children: "Lunch Layout"
  }
}

export default meta;
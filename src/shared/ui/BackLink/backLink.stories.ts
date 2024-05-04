import type {Meta, StoryObj} from '@storybook/react'
import BackLink from './backLink'
import {withRouter} from 'storybook-addon-remix-react-router'

const meta = {
    component: BackLink,
    decorators: [withRouter()],
    title: 'Shared/BackLink',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof BackLink>

type Story = StoryObj<typeof BackLink>;

export const BackLinkSimple: Story = {
    parameters: {
      docs: {
        description: {
            story: "simple back link"
        },
      },
    },
    args: {
        
    }
}

export default meta;
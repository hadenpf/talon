import * as React from 'react'
import { Meta, Story } from '@storybook/react'

import { Button, ButtonProps } from './Button'

export default {
	title: 'Atoms/Button',
	component: Button,
	parameters: {
		backgrounds: {
			default: 'light',
		},
	},
	args: {
		children: 'Button',
	},
} as Meta<typeof Button>

export const Default: Story = (props: ButtonProps) => <Button {...props} />

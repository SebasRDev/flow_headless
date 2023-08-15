import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Button Label',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Button Label',
  },
};

export const Big: Story = {
  args: {
    size: 'big',
    label: 'Button Label',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button Label',
  },
};

import { Meta, StoryObj } from '@storybook/react';
import { CustomLink } from "./CustomLink";

const meta:Meta = {
  title: 'Atoms/Link',
  component: CustomLink,
  parameters:{
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CustomLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Link',
    link: 'https://www.google.com/'
  }
}

export const Big: Story = {
  args: {
    size: 'big',
    label: 'Link',
    link: 'https://www.google.com/'
  }
}

export const Regular: Story = {
  args: {
    size: 'big',
    label: 'Link',
    link: 'https://www.google.com/',
    weight: 'regular'
  }
}

export const Medium: Story = {
  args: {
    size: 'big',
    label: 'Link',
    link: 'https://www.google.com/',
    weight: 'medium'
  }
}

export const Bold: Story = {
  args: {
    size: 'big',
    label: 'Link',
    link: 'https://www.google.com/',
    weight: 'bold'
  }
}
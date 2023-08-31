import type { Meta, StoryObj } from '@storybook/react';
import ImageCtaTest from "../../assets/halfImage1.jpeg";
import { HalfImageText } from './HalfImageText';

const halfImageMock = {
  title: "1. Fully-managed, end-to-end network solutions",
  description: "Because your I.T. solutions partner should offer best-of-breed hardware and software running on a secure, state-of-the-art fibre optics network backed by extensive technical expertise, all designed to help you reach your business goals. (Which we absolutely do.)",
  image: {
    url: ImageCtaTest.src,
    alt: "1. Fully-managed, end-to-end network solutions",
  },
  link: {
    text: "Explore our portfolio",
    url: "https://www.google.com",
  }
};

const meta: Meta = {
  title: 'Molecules/HalfImageText',
  component: HalfImageText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    alignmentImage: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' }
      }
    }
  },
} satisfies Meta<typeof HalfImageText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AlignImageToRight: Story = {
  args: {
    ...halfImageMock,
    title: "2. A world-class support team",
    alignmentImage: "right"
  },
};


import type { Meta, StoryObj } from '@storybook/react';
import ImageCtaTest from "../../assets/featureCta.jpeg";
import { FeatureCta } from './FeatureCta';

const featureCtaMock = {
  title: "Cutting-edge solutions designed to meet your needs",
  description: "Ready to begin building the perfect solution? We'll walk you through the process, step-by-step. Get in touch with us today to get started with your personalized I.T. transformation roadmap.",
  link: {
    text: "Contact us",
    url: "https://www.google.com"
  },
  images: {
    desktop: ImageCtaTest.src,
    mobile: ImageCtaTest.src,
  }
};

const meta: Meta = {
  title: 'Molecules/FeatureCta',
  component: FeatureCta,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    border: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "none" },
      }
    },
    textColor: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "blue" },
      }
    },
    alignmentText: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "center" },
      }
    },
  },
} satisfies Meta<typeof FeatureCta>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ColorBorderBlue: Story = {
  args: {
    ...featureCtaMock,
    border: "blue"
  },
};

export const ColorBorderWhite: Story = {
  args: {
    ...featureCtaMock,
    textColor: "white",
    border: "white"
  },
};

export const AlignmentLeft: Story = {
  args: {
    ...featureCtaMock,
    alignmentText: "left"
  },
};
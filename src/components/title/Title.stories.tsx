import type { Meta, StoryObj } from '@storybook/react';

import { Title } from './Title';

const meta: Meta = {
  title: 'Molecules/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    align: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "center" },
      }
    },
    color: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "primary" },
      }
    },
    size: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "big" },
      }
    },
    tag: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "h3" },
      }
    },
  },
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Why should you choose FLOW Enterprise?",
    subtitle: "We combine our robust network infrastructure with our extensive technical expertise and best-of-breed hardware and software to turn your challenges into opportunities. With our fully-managed technology solutions, your organisation's digital future is well within reach.",
  },
};

export const Secondary: Story = {
  args: {
    title: "Why should you choose FLOW Enterprise?",
    subtitle: "We combine our robust network infrastructure with our extensive technical expertise and best-of-breed hardware and software to turn your challenges into opportunities. With our fully-managed technology solutions, your organisation's digital future is well within reach.",
    color: "secondary",
  },
};

export const BigAlignCenter: Story = {
  args: {
    title: "Why should you choose FLOW Enterprise?",
    subtitle: "We combine our robust network infrastructure with our extensive technical expertise and best-of-breed hardware and software to turn your challenges into opportunities. With our fully-managed technology solutions, your organisation's digital future is well within reach.",
    align: "center",
    size: "big"
  },
};

export const BigAlignLeft: Story = {
  args: {
    title: "Why should you choose FLOW Enterprise?",
    subtitle: "We combine our robust network infrastructure with our extensive technical expertise and best-of-breed hardware and software to turn your challenges into opportunities. With our fully-managed technology solutions, your organisation's digital future is well within reach.",
    align: "left",
    size: "big"
  },
};

export const MediumAlignCenter: Story = {
  args: {
    title: "Why should you choose FLOW Enterprise?",
    subtitle: "We combine our robust network infrastructure with our extensive technical expertise and best-of-breed hardware and software to turn your challenges into opportunities. With our fully-managed technology solutions, your organisation's digital future is well within reach.",
    align: "center",
    size: "medium"
  },
};

export const MediumAlignLeft: Story = {
  args: {
    title: "Why should you choose FLOW Enterprise?",
    subtitle: "We combine our robust network infrastructure with our extensive technical expertise and best-of-breed hardware and software to turn your challenges into opportunities. With our fully-managed technology solutions, your organisation's digital future is well within reach.",
    align: "left",
    size: "medium"
  },
};

export const H1Tag: Story = {
  args: {
    title: "Why should you choose FLOW Enterprise?",
    subtitle: "We combine our robust network infrastructure with our extensive technical expertise and best-of-breed hardware and software to turn your challenges into opportunities. With our fully-managed technology solutions, your organisation's digital future is well within reach.",
    tag: "h1"
  },
};

export const H3Tag: Story = {
  args: {
    title: "Why should you choose FLOW Enterprise?",
    subtitle: "We combine our robust network infrastructure with our extensive technical expertise and best-of-breed hardware and software to turn your challenges into opportunities. With our fully-managed technology solutions, your organisation's digital future is well within reach.",
  },
};

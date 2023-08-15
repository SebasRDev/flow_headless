import { Meta, StoryObj } from "@storybook/react";
import { Crownbar } from "./Crownbar";

const meta: Meta = {
  title: "Molecules/Crown bar",
  component: Crownbar,
  tags: ["autodocs"],
} satisfies Meta<typeof Crownbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    businessMenu: [
      { label: "residential", link: "https://www.google.com" },
      { label: "business", link: "https://www.google.com" },
      { label: "enterprise", link: "https://www.google.com" },
      { label: "networks", link: "https://www.google.com" },
    ],
    countries: false,
    signIn: false,
  },
};

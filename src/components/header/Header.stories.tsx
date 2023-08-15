import { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta: Meta = {
  title: "Molecules/Crown bar",
  component: Header,
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;
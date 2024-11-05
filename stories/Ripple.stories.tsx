import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import Ripple from "../lib/components/Ripple";

const meta: Meta<typeof Ripple> = {
  title: "DevLife UI/Ripple",
  component: Ripple,
  argTypes: {
    color: {
      control: "text",
      description: "Color of `Ripple`",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    children: {
      control: "object",
      description: "Content of `Ripple`",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    className: {
      control: "text",
      description: "Wrapper class name",
    },
  },
  args: {},
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Ripple>;

export const Basic: Story = {
  args: {
    className: "bg-neutral-100",
    color: "rgba(50,50,50,0.5)",
    children: <p style={{ padding: "20px" }}>Click me</p>,
  },
};

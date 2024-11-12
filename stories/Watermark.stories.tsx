import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import Watermark from "../lib/components/Watermark";

const meta: Meta<typeof Watermark> = {
  title: "DevLife UI/Watermark",
  component: Watermark,
  argTypes: {
    text: {
      control: "text",
      description: "Text of `Watermark`",
    },
    width: {
      control: "number",
      description: "Width of `Watermark`",
    },
    height: {
      control: "number",
      description: "Height of `Watermark`",
    },
    children: {
      control: "object",
      description: "Children of `Watermark`",
    },
    className: {
      control: "text",
      description: "Wrapper class name",
    },
  },
  args: {
    width: 200,
    height: 120,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Watermark>;

export const Basic: Story = {
  args: {
    text: "Dev Life Solutions",
    children: (
      <p style={{ height: "16rem" }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga,
        architecto? Enim quas repellendus impedit unde, cumque, inventore nulla
        cupiditate excepturi nobis qui, magni praesentium. Deleniti eligendi
        alias veniam nulla obcaecati? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Fuga, architecto? Enim quas repellendus impedit unde,
        cumque, inventore nulla cupiditate excepturi nobis qui, magni
        praesentium. Deleniti eligendi alias veniam nulla obcaecati?
      </p>
    ),
  },
};

import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import Tooltip from "../lib/components/Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "DevLife UI/Tooltip",
  component: Tooltip,
  decorators: [
    (Story) => (
      <div
        style={{
          height: "6rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Story()}
      </div>
    ),
  ],
  argTypes: {
    title: {
      control: "text",
      description: "Label of `Tooltip`",
    },
    width: {
      control: "text",
      description: "Width of `Tooltip`",
      table: {
        type: {
          summary: "string | number",
        },
        defaultValue: {
          summary: "auto",
        },
      },
    },
    position: {
      control: "radio",
      options: ["top", "right", "bottom", "left"],
      description: "Size of `Tooltip`",
      table: {
        defaultValue: { summary: '"medium"' },
        type: {
          summary: "union",
        },
      },
    },
    children: {
      control: "object",
      description: "Body content of `Tooltip`",
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
    tooltipClassName: {
      control: "text",
      description: "Tooltip class name",
    },
  },
  args: {
    position: "top",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  args: {
    title: "This is tooltip content",
    children: "Hover me",
  },
};

import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import Code from "../lib/components/Code";

const meta: Meta<typeof Code> = {
  title: "DevLife UI/Code",
  component: Code,
  decorators: [
    (Story) => <div style={{ width: "fit-content" }}>{Story()}</div>,
  ],
  argTypes: {
    code: {
      control: "text",
      description: "Content of `Code`",
    },
    showCopy: {
      control: "boolean",
      description: "Visible copy button",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      description: "Size of `Code`",
      table: {
        defaultValue: { summary: '"medium"' },
        type: {
          summary: "union",
        },
      },
    },
    color: {
      control: "radio",
      options: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ],
      description: "Color of `Code`",
      table: {
        defaultValue: { summary: '"primary"' },
        type: {
          summary: "union",
        },
      },
    },
    className: {
      control: "text",
      description: "Wrapper class name",
    },
  },
  args: {
    code: "npm install react",
    size: "medium",
    color: "primary",
    showCopy: false,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Code>;

export const Basic: Story = {
  args: {
    code: "npm install react",
  },
};

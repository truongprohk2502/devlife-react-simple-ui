import { StoryObj, Meta } from "@storybook/react";
import Input from "../lib/components/Input";
import React from "react";

const meta: Meta<typeof Input> = {
  title: "DevLife UI/Input",
  component: Input,
  decorators: [(Story) => <div style={{ width: "18rem" }}>{Story()}</div>],
  argTypes: {
    label: {
      control: "text",
      description: "Label text",
    },
    placeholder: {
      control: "text",
      description: "Input placeholder",
      table: {
        type: { summary: "string" },
      },
    },
    error: {
      control: "text",
      description: "Error message of `Input`",
      table: {
        type: { summary: "string | null" },
      },
    },
    wrapperClassName: {
      control: "text",
      description: "Wrapper class name",
    },
    isFloatLabel: {
      control: "boolean",
      description: "Label is floated inside input",
      table: { defaultValue: { summary: "false" } },
    },
    disabled: {
      control: "boolean",
      description: "Disable `Input`",
      table: { defaultValue: { summary: "false" } },
    },
    inputSize: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      description: "Size of `Input`",
      table: {
        defaultValue: { summary: '"medium"' },
        type: {
          summary: "union",
        },
      },
    },
  },
  args: {
    inputSize: "medium",
    isFloatLabel: false,
    disabled: false,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  args: {
    label: "Address",
    placeholder: "Please input address",
  },
};

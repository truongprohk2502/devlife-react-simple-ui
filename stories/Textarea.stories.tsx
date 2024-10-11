import { StoryObj, Meta } from "@storybook/react";
import Textarea from "../lib/components/Textarea";
import React from "react";

const meta: Meta<typeof Textarea> = {
  title: "DevLife UI/Textarea",
  component: Textarea,
  decorators: [(Story) => <div style={{ width: "18rem" }}>{Story()}</div>],
  argTypes: {
    label: {
      control: "text",
      description: "Label text",
    },
    placeholder: {
      control: "text",
      description: "Textarea placeholder",
      table: {
        type: { summary: "string" },
      },
    },
    error: {
      control: "text",
      description: "Error message of `Textarea`",
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
      description: "Label is floated inside Textarea",
      table: { defaultValue: { summary: "false" } },
    },
    disabled: {
      control: "boolean",
      description: "Disable `Textarea`",
      table: { defaultValue: { summary: "false" } },
    },
    inputSize: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      description: "Size of `Textarea`",
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

type Story = StoryObj<typeof Textarea>;

export const Basic: Story = {
  args: {
    label: "Address",
    placeholder: "Please input address",
  },
};

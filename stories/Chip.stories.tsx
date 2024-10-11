import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import Chip from "../lib/components/Chip";

const meta: Meta<typeof Chip> = {
  title: "DevLife UI/Chip",
  component: Chip,
  decorators: [
    (Story) => <div style={{ width: "fit-content" }}>{Story()}</div>,
  ],
  argTypes: {
    title: {
      control: "text",
      description: "Title of Chip",
    },
    variant: {
      control: "inline-radio",
      options: ["bordered", "solid"],
      description: "Theme variant of Chip",
      table: {
        defaultValue: { summary: '"solid"' },
        type: {
          summary: "union",
        },
      },
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      description: "Size of Chip",
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
      description: "Color of Chip",
      table: {
        defaultValue: { summary: '"primary"' },
        type: {
          summary: "union",
        },
      },
    },
    hasRemove: {
      control: "boolean",
      description: "Whether has remove button",
      table: { defaultValue: { summary: "false" } },
    },
    disabled: {
      control: "boolean",
      description: "Disable Chip",
      table: { defaultValue: { summary: "false" } },
    },
    onRemove: {
      control: "object",
      description: "Click remove button event",
    },
  },
  args: {
    title: "React JS",
    variant: "solid",
    size: "medium",
    color: "primary",
    hasRemove: false,
    disabled: false,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Basic: Story = {
  args: {
    title: "React JS",
  },
};

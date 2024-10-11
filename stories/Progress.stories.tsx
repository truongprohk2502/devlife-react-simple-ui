import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import Progress from "../lib/components/Progress";

const meta: Meta<typeof Progress> = {
  title: "DevLife UI/Progress",
  component: Progress,
  decorators: [(Story) => <div style={{ width: "20rem" }}>{Story()}</div>],
  argTypes: {
    value: {
      control: "number",
      description: "Value of `Progress`",
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      description: "Size of `Progress`",
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
      description: "Color of `Progress`",
      table: {
        defaultValue: { summary: '"primary"' },
        type: {
          summary: "union",
        },
      },
    },
    hasStripes: {
      control: "boolean",
      description: "Whether has stripes on progress bar",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    animateStripes: {
      control: "boolean",
      description: "Whether has animate stripes on progress",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    className: {
      control: "text",
      description: "Wrapper class name",
    },
  },
  args: {
    size: "medium",
    color: "primary",
    hasStripes: false,
    animateStripes: false,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Basic: Story = {
  args: {
    value: 50,
  },
};

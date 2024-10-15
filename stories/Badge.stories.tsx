import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import Avatar from "../lib/components/Avatar";
import Badge from "../lib/components/Badge";

const meta: Meta<typeof Badge> = {
  title: "DevLife UI/Badge",
  component: Badge,
  argTypes: {
    shape: {
      control: "inline-radio",
      options: ["square", "circle"],
      description: "Shape of `Badge`",
      table: {
        defaultValue: { summary: '"square"' },
        type: {
          summary: "union",
        },
      },
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      description: "Size of `Badge`",
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
      description: "Color of `Badge`",
      table: {
        defaultValue: { summary: '"primary"' },
        type: {
          summary: "union",
        },
      },
    },
    showOutline: {
      control: "boolean",
      description: "Show outline around `Badge`",
      table: { defaultValue: { summary: "false" } },
    },
    hidden: {
      control: "boolean",
      description: "Hide `Badge`",
      table: { defaultValue: { summary: "false" } },
    },
    children: {
      control: "object",
      description: "Content of `Badge`",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
  },
  args: {
    shape: "square",
    size: "medium",
    color: "primary",
    showOutline: false,
    hidden: false,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Basic: Story = {
  args: {
    title: "4",
    children: (
      <Avatar
        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        name="Jane"
        radius="small"
      />
    ),
  },
};

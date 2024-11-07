import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import BlockUI from "../lib/components/BlockUI";
import { LockIcon } from "lucide-react";

const meta: Meta<typeof BlockUI> = {
  title: "DevLife UI/BlockUI",
  component: BlockUI,
  argTypes: {
    icon: {
      control: "object",
      description: "Icon of `BlockUI`",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    children: {
      control: "object",
      description: "Content of `BlockUI`",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    blocked: {
      control: "boolean",
      description: "Blocked state of `BlockUI`",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: "true" },
      },
    },
    className: {
      control: "text",
      description: "Wrapper class name",
    },
  },
  args: {
    blocked: true,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BlockUI>;

export const Basic: Story = {
  args: {
    children: (
      <p style={{ padding: "10px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    ),
    icon: <LockIcon />,
  },
};

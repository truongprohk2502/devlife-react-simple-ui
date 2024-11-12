import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import Steps from "../lib/components/Steps";
import { CalendarIcon, UserIcon, WalletIcon } from "lucide-react";

const meta: Meta<typeof Steps> = {
  title: "DevLife UI/Steps",
  component: Steps,
  argTypes: {
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
      description: "Color of `Steps`",
    },
    position: {
      control: "inline-radio",
      options: ["inline", "break-line"],
      description: "`Label` and `description` position of `Steps`",
    },
    steps: {
      control: "object",
      description:
        "Steps of `Steps`. Includes `title`, `description` and `icon`",
      table: { type: { summary: "Array<Step>" } },
    },
    current: {
      control: "number",
      description: "Current step",
    },
  },
  args: {
    color: "primary",
    position: "inline",
    current: 2,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Steps>;

export const Basic: Story = {
  args: {
    steps: [
      {
        title: "Step 1",
        description: "This step",
        icon: <UserIcon width={16} height={16} />,
      },
      {
        title: "Step 2",
        description: "That step",
        icon: <CalendarIcon width={16} height={16} />,
      },
      {
        title: "Step 3",
        description: "Final step",
        icon: <WalletIcon width={16} height={16} />,
      },
    ],
  },
};

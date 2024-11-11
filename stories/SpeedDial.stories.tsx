import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import SpeedDial from "../lib/components/SpeedDial";

const meta: Meta<typeof SpeedDial> = {
  title: "DevLife UI/SpeedDial",
  component: SpeedDial,
  decorators: [
    (Story) => (
      <div
        style={{
          width: "100%",
          height: "28rem",
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
      description: "Color of `SpeedDial`",
    },
    position: {
      control: "radio",
      options: ["top", "right", "bottom", "left"],
      description: "Position of `SpeedDial`",
    },
    items: {
      control: "object",
      description: "List of `SpeedDial` items. Each item has `icon` and `onClick`.",
    },
    className: {
      control: "text",
      description: "Class name of `SpeedDial`",
    },
  },
  args: {
    color: "primary",
    position: "bottom",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SpeedDial>;

export const Basic: Story = {
  args: {
    items: [
      { icon: "👋", onClick: () => console.log("👋") },
      { icon: "🤢", onClick: () => console.log("🤢") },
      { icon: "😍", onClick: () => console.log("😍") },
    ],
  },
};

import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import MobileMockup from "../lib/components/MobileMockup";

const meta: Meta<typeof MobileMockup> = {
  title: "DevLife UI/MobileMockup",
  component: MobileMockup,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "center" }}>{Story()}</div>
    ),
  ],
  argTypes: {
    size: {
      control: "inline-radio",
      description: "Size of `MobileMockup`",
    },
    edgeSize: {
      control: "inline-radio",
      description: "Edge thickness of `MobileMockup`",
    },
    edgeRounded: {
      control: "inline-radio",
      description: "Edge radius of `MobileMockup`",
    },
    topVariant: {
      control: "radio",
      description: "Top header variant theme of `MobileMockup`",
    },
    bottomVariants: {
      control: "radio",
      description: "Bottom navigation button theme of `MobileMockup`",
    },
    showBackground: {
      control: "boolean",
      description: "Show background",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    className: {
      control: "text",
      description: "Wrapper class name of children",
    },
    children: {
      control: "object",
      description: "Children of `MobileMockup`",
    },
  },
  args: {
    showBackground: false,
    size: "medium",
    edgeSize: "small",
    edgeRounded: "small",
    topVariant: "invisible",
    bottomVariants: "none",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MobileMockup>;

export const Basic: Story = {
  args: {
    children: <h1 style={{ color: "red", fontSize: "24px" }}>Hello world</h1>,
  },
};

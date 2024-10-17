import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import BrowserMockup from "../lib/components/BrowserMockup";

const meta: Meta<typeof BrowserMockup> = {
  title: "DevLife UI/BrowserMockup",
  component: BrowserMockup,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "center" }}>{Story()}</div>
    ),
  ],
  argTypes: {
    href: {
      control: "text",
      description: "Website URL",
    },
    title: {
      control: "text",
      description: "Tab title",
    },
    hasButtonColor: {
      control: "boolean",
      description: "Show colors of browser buttons",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    variant: {
      control: "inline-radio",
      description: "Theme variant of `BrowserMockup`",
    },
    className: {
      control: "text",
      description: "Wrapper class name of children",
    },
    children: {
      control: "object",
      description: "Children of `BrowserMockup`",
    },
  },
  args: {
    variant: "compact",
    hasButtonColor: false,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BrowserMockup>;

export const Basic: Story = {
  args: {
    title: "Dev's Life Solutions - Tools for developer",
    href: "https://dev-life-solution.netlify.app",
    children: (
      <h1 style={{ color: "red", fontSize: "24px", padding: "10px" }}>
        Hello world
      </h1>
    ),
  },
};

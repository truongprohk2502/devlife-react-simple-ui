import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import DlTabs from "../lib/components/Tabs";

const meta: Meta<typeof Tabs> = {
  title: "DevLife UI/Tabs",
  component: DlTabs,
  decorators: [
    (Story) => <div style={{ width: "fit-content" }}>{Story()}</div>,
  ],
  argTypes: {
    variant: {
      control: "radio",
      options: ["solid", "bordered", "underlined", "ghost"],
      description: "Theme variant of `Tabs`",
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
      description: "Size of `Tabs`",
      table: {
        defaultValue: { summary: '"medium"' },
        type: {
          summary: "union",
        },
      },
    },
    radius: {
      control: "inline-radio",
      options: ["none", "medium", "full"],
      description: "Border radius of `Tabs`",
      table: {
        defaultValue: { summary: '"medium"' },
        type: {
          summary: "union",
        },
      },
    },
    disabled: {
      control: "boolean",
      description: "Disable `Tabs`",
      table: { defaultValue: { summary: "false" } },
    },
    selectedIndex: {
      control: "number",
      description: "Index of selected tab",
    },
    onChange: {
      control: "object",
      description: "Change `Tabs` event",
    },
  },
  args: {
    variant: "solid",
    size: "medium",
    radius: "medium",
    disabled: false,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DlTabs>;

const Tabs = (props: any) => {
  const [index, setIndex] = React.useState<number>(0);

  return <DlTabs {...props} selectedIndex={index} onChange={setIndex} />;
};

export const Basic: Story = {
  args: {
    tabs: [
      { title: "Photos" },
      { title: "Music" },
      { title: "Videos" },
      { title: "Disabled", disabled: true },
    ],
  },
  render: (args) => <Tabs {...args} />,
};

import { StoryObj, Meta } from "@storybook/react";
import DlSwitch from "../lib/components/Switch";
import React from "react";

const meta: Meta<typeof DlSwitch> = {
  title: "DevLife UI/Switch",
  component: DlSwitch,
  argTypes: {
    checked: {
      control: "boolean",
      description: "Checked status of `Switch`",
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      description: "Size of `Switch`",
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
      description: "Color of `Switch`",
      table: {
        defaultValue: { summary: '"primary"' },
        type: {
          summary: "union",
        },
      },
    },
    disabled: {
      control: "boolean",
      description: "Disable `Switch`",
      table: { defaultValue: { summary: "false" } },
    },
    onChange: {
      control: "object",
      description: "Toggle `Switch` event",
    },
  },
  args: {
    size: "medium",
    color: "primary",
    disabled: false,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DlSwitch>;

const Switch = (props: any) => {
  const [checked, setChecked] = React.useState<boolean>(true);

  return <DlSwitch {...props} checked={checked} onChange={setChecked} />;
};

export const Basic: Story = {
  args: {},
  render: (args) => <Switch {...args} />,
};

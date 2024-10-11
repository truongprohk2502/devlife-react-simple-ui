import { StoryObj, Meta } from "@storybook/react";
import DlCheckbox from "../lib/components/Checkbox";
import React from "react";

const meta: Meta<typeof DlCheckbox> = {
  title: "DevLife UI/Checkbox",
  component: DlCheckbox,
  argTypes: {
    label: {
      control: "text",
      description: "Label of checkbox",
    },
    checked: {
      control: "boolean",
      description: "Checked status of checkbox",
    },
    inputSize: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      description: "Size of checkbox",
      table: {
        defaultValue: { summary: '"medium"' },
        type: {
          summary: "union",
        },
      },
    },
    checkboxColor: {
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
      description: "Color of checkbox",
      table: {
        defaultValue: { summary: '"primary"' },
        type: {
          summary: "union",
        },
      },
    },
    disabled: {
      control: "boolean",
      description: "Disable checkbox",
      table: { defaultValue: { summary: "false" } },
    },
  },
  args: {
    label: "Are you ok?",
    inputSize: "medium",
    checkboxColor: "primary",
    disabled: false,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DlCheckbox>;

const Checkbox = (props: any) => {
  const [checked, setChecked] = React.useState<boolean>(true);

  return (
    <DlCheckbox
      {...props}
      checked={checked}
      onChangeChecked={() => setChecked(!checked)}
    />
  );
};

export const Basic: Story = {
  args: {
    label: "Are you ok?",
  },
  render: (args) => <Checkbox {...args} />,
};

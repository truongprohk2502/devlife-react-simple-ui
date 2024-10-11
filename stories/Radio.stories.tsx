import { StoryObj, Meta } from "@storybook/react";
import DlRadio from "../lib/components/Radio";
import React from "react";

const meta: Meta<typeof DlRadio> = {
  title: "DevLife UI/Radio",
  component: DlRadio,
  argTypes: {
    label: {
      control: "text",
      description: "Label of `Radio`",
    },
    checked: {
      control: "boolean",
      description: "Checked status of `Radio`",
    },
    inputSize: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      description: "Size of `Radio`",
      table: {
        defaultValue: { summary: '"medium"' },
        type: {
          summary: "union",
        },
      },
    },
    radioColor: {
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
      description: "Color of `Radio`",
      table: {
        defaultValue: { summary: '"primary"' },
        type: {
          summary: "union",
        },
      },
    },
    disabled: {
      control: "boolean",
      description: "Disable `Radio`",
      table: { defaultValue: { summary: "false" } },
    },
  },
  args: {
    label: "Are you ok?",
    inputSize: "medium",
    radioColor: "primary",
    disabled: false,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DlRadio>;

const Radio = (props: any) => {
  const [checked, setChecked] = React.useState<boolean>(false);

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <DlRadio
        {...props}
        checked={checked}
        onChangeChecked={() => setChecked(!checked)}
      />
      <DlRadio
        {...props}
        checked={!checked}
        onChangeChecked={() => setChecked(!checked)}
      />
    </div>
  );
};

export const Basic: Story = {
  args: {
    label: "Are you ok?",
  },
  render: (args) => <Radio {...args} />,
};

import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import DlSpinner from "../lib/components/Spinner";

const meta: Meta<typeof DlSpinner> = {
  title: "DevLife UI/Spinner",
  component: DlSpinner,
  argTypes: {
    variant: {
      control: "radio",
      options: ["clip", "fade", "scale", "bounce", "pulse"],
      description: "Theme variant of `Spinner`",
      table: {
        defaultValue: { summary: '"clip"' },
        type: {
          summary: "union",
        },
      },
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      description: "Size of `Spinner`",
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
      description: "Color of `Spinner`",
      table: {
        defaultValue: { summary: '"primary"' },
        type: {
          summary: "union",
        },
      },
    },
  },
  args: {
    variant: "clip",
    size: "medium",
    color: "primary",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DlSpinner>;

const Spinner = (props: any) => {
  const [value, setValue] = React.useState<string>("");

  return <DlSpinner {...props} value={value} onChange={setValue} />;
};

export const Basic: Story = {
  args: {},
  render: (args) => <Spinner {...args} />,
};

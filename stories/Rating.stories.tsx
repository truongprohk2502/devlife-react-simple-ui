import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import DlRating from "../lib/components/Rating";

const meta: Meta<typeof Rating> = {
  title: "DevLife UI/Rating",
  component: DlRating,
  decorators: [
    (Story) => <div style={{ width: "fit-content" }}>{Story()}</div>,
  ],
  argTypes: {
    value: {
      control: "number",
      description: "Value of `Rating`",
    },
    total: {
      control: "number",
      description: "Total stars of `Rating`",
    },
    hasHalfValue: {
      control: "boolean",
      description: "Whether `Rating` has half value or not",
    },
    disabled: {
      control: "boolean",
      description: "Disable `Rating`",
      table: { defaultValue: { summary: "false" } },
    },
    className: {
      control: "text",
      description: "Wrapper class name",
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
      description: "Color of `Rating`",
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      description: "Size of `Rating`",
    },
    onChange: {
      control: "object",
      description: "Change event handler",
    },
  },
  args: {
    total: 5,
    hasHalfValue: false,
    disabled: false,
    color: "primary",
    size: "medium",
  },
  tags: ["autodocs"],
};

export default meta;

const Rating = (props: any) => {
  const [value, setValue] = React.useState<number>(0);

  return <DlRating {...props} value={value} onChange={setValue} />;
};

type Story = StoryObj<typeof DlRating>;

export const Basic: Story = {
  args: {},
  render: (args) => <Rating {...args} />,
};

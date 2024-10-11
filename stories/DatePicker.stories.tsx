import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import DlDatePicker from "../lib/components/DatePicker";

const meta: Meta<typeof DlDatePicker> = {
  title: "DevLife UI/DatePicker",
  component: DlDatePicker,
  decorators: [
    (Story) => <div style={{ paddingBottom: "20rem" }}>{Story()}</div>,
  ],
  argTypes: {
    value: {
      control: "text",
      description: "Value of `DatePicker` with format `YYYY-MM-DD`",
      table: { type: { summary: "string" } },
    },
    disabled: {
      control: "boolean",
      description: "Disable `DatePicker`",
      table: { defaultValue: { summary: "false" } },
    },
    className: {
      control: "text",
      description: "Wrapper class name",
    },
    onChange: {
      control: "object",
      description: "Change `DatePicker` event",
    },
  },
  args: {
    disabled: false,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DlDatePicker>;

const DatePicker = (props: any) => {
  const [value, setValue] = React.useState<string>("");

  return <DlDatePicker {...props} value={value} onChange={setValue} />;
};

export const Basic: Story = {
  args: {},
  render: (args) => <DatePicker {...args} />,
};

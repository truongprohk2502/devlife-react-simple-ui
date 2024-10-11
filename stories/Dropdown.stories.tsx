import { StoryObj, Meta } from "@storybook/react";
import DlDropdown from "../lib/components/Dropdown";
import React from "react";

const meta: Meta<typeof DlDropdown> = {
  title: "DevLife UI/Dropdown",
  component: DlDropdown,
  decorators: [
    (Story) => <div style={{ paddingBottom: "12rem" }}>{Story()}</div>,
  ],
  argTypes: {
    options: {
      control: "object",
      description: "List of recommended options",
      table: {
        type: {
          summary: "Array<{label: string, value: string}>",
        },
      },
    },
    value: {
      control: "text",
      description: "Dropdown value",
    },
    placeholder: {
      control: "text",
      description: "Dropdown placeholder",
    },
    className: {
      control: "text",
      description: "Wrapper class name",
    },
    disabled: {
      control: "boolean",
      description: "Disable `Dropdown`",
      table: { defaultValue: { summary: "false" } },
    },
    onChange: {
      control: "object",
      description: "Change value event",
    },
  },
  args: {
    disabled: false,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DlDropdown>;

const Dropdown = (props: any) => {
  const [value, setValue] = React.useState<string>("");

  return <DlDropdown {...props} value={value} onChange={setValue} />;
};

export const Basic: Story = {
  args: {
    placeholder: "Select city",
    options: [
      { label: "Danang", value: "Danang" },
      { label: "Hanoi", value: "Hanoi" },
      { label: "New York", value: "New York" },
      { label: "Paris", value: "Paris" },
      { label: "Barcelona", value: "Barcelona" },
      { label: "Milan", value: "Milan" },
      { label: "Berlin", value: "Berlin" },
      { label: "Tokyo", value: "Tokyo" },
    ],
  },
  render: (args) => <Dropdown {...args} />,
};

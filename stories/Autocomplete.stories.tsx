import { StoryObj, Meta } from "@storybook/react";
import DlAutocomplete from "../lib/components/Autocomplete";
import React from "react";

const meta: Meta<typeof DlAutocomplete> = {
  title: "DevLife UI/Autocomplete",
  component: DlAutocomplete,
  decorators: [
    (Story) => <div style={{ paddingBottom: "12rem" }}>{Story()}</div>,
  ],
  argTypes: {
    options: {
      control: "object",
      description: "List of recommended options",
    },
    value: {
      control: "text",
      description: "Input value",
    },
    placeholder: {
      control: "text",
      description: "Input placeholder",
    },
    className: {
      control: "text",
      description: "Wrapper class name",
    },
    disabled: {
      control: "boolean",
      description: "Disable autocomplete",
      table: { defaultValue: { summary: "false" } },
    },
    onChange: {
      control: "object",
      description: "Change input event",
    },
  },
  args: {
    disabled: false,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DlAutocomplete>;

const Autocomplete = (props: any) => {
  const [value, setValue] = React.useState<string>("");

  return <DlAutocomplete {...props} value={value} onChange={setValue} />;
};

export const Basic: Story = {
  args: {
    options: [
      "Cat",
      "Dog",
      "Zebra",
      "Bird",
      "Snake",
      "Frog",
      "Elephant",
      "Buffalo",
      "Mouse",
      "Tiger",
      "Lion",
    ],
  },
  render: (args) => <Autocomplete {...args} />,
};

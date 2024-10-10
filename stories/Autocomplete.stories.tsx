import { StoryObj, Meta } from "@storybook/react";
import Autocomplete from "../lib/components/Autocomplete";
import React from "react";

const meta: Meta<typeof Autocomplete> = {
  title: "DevLife UI/Autocomplete",
  component: Autocomplete,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Autocomplete>;

const AutocompleteWithHooks = (props: any) => {
  const [value, setValue] = React.useState<string>("");

  return <Autocomplete {...props} value={value} onChange={setValue} />;
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
  render: (args) => <AutocompleteWithHooks {...args} />,
};

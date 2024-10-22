import { StoryObj, Meta } from "@storybook/react";
import Countdown from "../lib/components/Countdown";

const meta: Meta<typeof Countdown> = {
  title: "DevLife UI/Countdown",
  component: Countdown,
  argTypes: {
    seconds: {
      control: "number",
      description: "Seconds to countdown",
    },
    hasDay: {
      control: "boolean",
      description: "Show day in `Countdown`",
    },
    variant: {
      control: "radio",
      description: "Variant of `Countdown`",
    },
    size: {
      control: "radio",
      description: "Size of `Countdown`",
    },
  },
  args: {
    hasDay: false,
    variant: "line_label",
    size: "medium",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Countdown>;

export const Basic: Story = {
  args: {
    seconds: 86410,
  },
};

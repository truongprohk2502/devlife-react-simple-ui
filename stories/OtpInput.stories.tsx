import { StoryObj, Meta } from "@storybook/react";
import OtpInput from "../lib/components/OtpInput";

const meta: Meta<typeof OtpInput> = {
  title: "DevLife UI/OtpInput",
  component: OtpInput,
  argTypes: {
    total: {
      control: "number",
      description: "The number of characters to be entered",
    },
    separator: {
      control: "object",
      description: "Separator between inputs",
    },
    onFinish: {
      control: "object",
      description: "Finish event",
    },
  },
  args: {
    total: 5,
    separator: "-",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof OtpInput>;

export const Basic: Story = {
  args: {
    onFinish: console.log,
  },
};

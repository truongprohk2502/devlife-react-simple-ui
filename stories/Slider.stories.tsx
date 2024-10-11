import { StoryObj, Meta } from "@storybook/react";
import Slider from "../lib/components/Slider";

const meta: Meta<typeof Slider> = {
  title: "DevLife UI/Slider",
  component: Slider,
  argTypes: {
    value: {
      control: "number",
      description: "Slider value",
    },
    defaultValue: {
      control: "number",
      description: "Slider default value",
    },
    min: {
      control: "number",
      description: "Slider minimum value",
    },
    max: {
      control: "number",
      description: "Slider maximum value",
    },
    sliderSize: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      description: "Size of button",
      table: {
        defaultValue: { summary: '"medium"' },
        type: {
          summary: "union",
        },
      },
    },
    bgColor: {
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
      description: "Color of button",
      table: {
        defaultValue: { summary: '"primary"' },
        type: {
          summary: "union",
        },
      },
    },
  },
  args: {
    sliderSize: "medium",
    bgColor: "primary",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Basic: Story = {
  args: {
    defaultValue: 50,
  },
};

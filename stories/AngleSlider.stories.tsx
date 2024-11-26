import { StoryObj, Meta } from "@storybook/react";
import AngleSlider from "../lib/components/AngleSlider";

const meta: Meta<typeof AngleSlider> = {
  title: "DevLife UI/AngleSlider",
  component: AngleSlider,
  argTypes: {
    value: {
      control: "number",
      description: "Angle initial value",
    },
    max: {
      control: "number",
      description: "Maximum angle value",
    },
    showLabel: {
      control: "boolean",
      description: "Whether to show label or not",
    },
    labelSize: {
      control: "radio",
      options: ["small", "medium", "large"],
      description: "Label size of `AngleSlider`",
    },
    barSizePercent: {
      control: "number",
      description: "Percentage of bar size",
    },
    barThick: {
      control: "text",
      description: "Thickness of bar",
    },
    size: {
      control: "text",
      description: "Size of `AngleSlider` in pixel, rem, or percentage",
    },
    onChange: {
      control: "object",
      description: "Change handler of `AngleSlider`",
    },
    onEnd: {
      control: "object",
      description: "End handler of `AngleSlider`",
    },
  },
  args: {
    value: 0,
    max: 360,
    showLabel: true,
    labelSize: "medium",
    barSizePercent: 70,
    barThick: "2px",
    size: "5rem",
    onChange: (val) => console.log("change: " + val),
    onEnd: (val) => console.log("end: " + val),
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AngleSlider>;

export const Basic: Story = {
  args: {},
};

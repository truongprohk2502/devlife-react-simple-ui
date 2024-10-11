import { StoryObj, Meta } from "@storybook/react";
import Skeleton from "../lib/components/Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "DevLife UI/Skeleton",
  component: Skeleton,
  argTypes: {
    width: {
      control: "text",
      description: "Width of `Skeleton`",
      table: {
        type: {
          summary: "string | number",
        },
      },
    },
    height: {
      control: "text",
      description: "Height of `Skeleton`",
      table: {
        type: {
          summary: "string | number",
        },
      },
    },
    shape: {
      control: "inline-radio",
      description: "Shape of `Skeleton`",
    },
  },
  args: {
    shape: "square",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Basic: Story = {
  args: {
    width: "100px",
    height: "100px",
  },
};

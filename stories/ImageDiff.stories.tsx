import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import ImageDiff from "../lib/components/ImageDiff";

const meta: Meta<typeof ImageDiff> = {
  title: "DevLife UI/ImageDiff",
  component: ImageDiff,
  decorators: [(Story) => <div style={{ width: "30rem" }}>{Story()}</div>],
  argTypes: {
    imgSrcLeft: {
      control: "text",
      description: "Left image source",
    },
    imgSrcRight: {
      control: "text",
      description: "Right image source",
    },
    size: {
      control: "object",
      description:
        "Size of image. Can be fixed size with `{ width: number, height: number }` or based on image ratio with `{ ratio: number }`",
    },
    resizePosition: {
      control: "number",
      description: "Initial resize position in percentage",
    },
    className: {
      control: "text",
      description: "Wrapper class name",
    },
  },
  args: {},
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ImageDiff>;

export const Basic: Story = {
  args: {
    imgSrcLeft:
      "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp",
    imgSrcRight:
      "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp",
    size: { width: 580, height: 320 },
  },
};

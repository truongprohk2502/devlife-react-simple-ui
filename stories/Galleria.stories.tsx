import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import Galleria from "../lib/components/Galleria";

const meta: Meta<typeof Galleria> = {
  title: "DevLife UI/Galleria",
  component: Galleria,
  decorators: [(Story) => <div style={{ width: "20rem" }}>{Story()}</div>],
  argTypes: {
    images: {
      control: "object",
      description: "List of images",
    },
    animation: {
      control: "boolean",
      description: "Whether to show animation or not",
    },
    className: {
      control: "text",
      description: "Wrapper class name",
    },
  },
  args: {
    animation: true,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Galleria>;

export const Basic: Story = {
  args: {
    images: [
      "https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg",
      "https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg",
      "https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg",
      "https://primefaces.org/cdn/primereact/images/galleria/galleria4.jpg",
      "https://primefaces.org/cdn/primereact/images/galleria/galleria5.jpg",
      "https://primefaces.org/cdn/primereact/images/galleria/galleria6.jpg",
      "https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg",
      "https://primefaces.org/cdn/primereact/images/galleria/galleria8.jpg",
    ]
  },
};

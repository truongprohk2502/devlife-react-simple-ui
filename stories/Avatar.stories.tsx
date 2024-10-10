import { StoryObj, Meta } from "@storybook/react";
import Avatar from "../lib/components/Avatar";

const meta: Meta<typeof Avatar> = {
  title: "DevLife UI/Avatar",
  component: Avatar,
  argTypes: {
    src: {
      control: "text",
      description: "Image source url",
    },
    name: {
      control: "text",
      description: "Avatar name",
    },
    bordered: {
      control: "boolean",
      description: "Whether has border around avatar",
      table: { defaultValue: { summary: "false" } },
    },
    randomFallbackColor: {
      control: "boolean",
      description:
        "Whether generate a random color for avatar when loading image failed",
      table: { defaultValue: { summary: "false" } },
    },
    disabled: {
      control: "boolean",
      description: "Disable avatar",
      table: { defaultValue: { summary: "false" } },
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      description: "Size of avatar",
      table: { defaultValue: { summary: '"medium"' } },
    },
    radius: {
      control: "inline-radio",
      options: ["small", "large", "full"],
      description: "Border radius",
      table: { defaultValue: { summary: '"full"' } },
    },
  },
  args: {
    size: "medium",
    radius: "full",
    bordered: false,
    randomFallbackColor: false,
    disabled: false,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Basic: Story = {
  args: {
    src: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    name: "Jane",
  },
};

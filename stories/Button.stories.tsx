import { StoryObj, Meta } from "@storybook/react";
import Button from "../lib/components/Button";

const meta: Meta<typeof Button> = {
  title: "DevLife UI/Button",
  component: Button,
  argTypes: {
    size: {
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
    variant: {
      control: "inline-radio",
      options: ["solid", "soft", "outline"],
      description: "Theme variant of button",
      table: {
        defaultValue: { summary: '"solid"' },
        type: {
          summary: "union",
        },
      },
    },
    buttonColor: {
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
    radius: {
      control: "inline-radio",
      options: ["none", "large", "full"],
      description: "Border radius of button",
      table: {
        defaultValue: { summary: '"large"' },
        type: {
          summary: "union",
        },
      },
    },
    disabled: {
      control: "boolean",
      description: "Disable button",
      table: { defaultValue: { summary: "false" } },
    },
    children: {
      control: "object",
      description: "Content of button",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    onClick: {
      control: "object",
      description: "Click button event",
      table: {
        type: { summary: "() => void" },
      },
    },
  },
  args: {
    size: "medium",
    variant: "solid",
    buttonColor: "primary",
    radius: "large",
    disabled: false,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    children: "Click me",
  },
};

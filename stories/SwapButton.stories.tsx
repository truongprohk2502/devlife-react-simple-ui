import { StoryObj, Meta } from "@storybook/react";
import DlSwapButton from "../lib/components/SwapButton";
import React from "react";

const meta: Meta<typeof DlSwapButton> = {
  title: "DevLife UI/SwapButton",
  component: DlSwapButton,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "center" }}>{Story()}</div>
    ),
  ],
  argTypes: {
    animation: {
      control: "radio",
      options: ["none", "fade", "spin", "flip"],
      description: "Animation of `SwapButton`",
    },
    on: {
      control: "boolean",
      description: "Whether `SwapButton` is on",
    },
    onItem: {
      control: "object",
      description: "Item to show when `SwapButton` is on",
    },
    offItem: {
      control: "object",
      description: "Item to show when `SwapButton` is off",
    },
    className: {
      control: "text",
      description: "Wrapper class name",
    },
  },
  args: {
    animation: "none",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DlSwapButton>;

const SwapButton = (props: any) => {
  const [value, setValue] = React.useState<boolean>(true);

  return (
    <DlSwapButton {...props} on={value} onToggle={() => setValue(!value)} />
  );
};

export const Basic: Story = {
  args: {
    onItem: <span style={{ fontSize: "52px" }}>😇</span>,
    offItem: <span style={{ fontSize: "52px" }}>😈</span>,
  },
  render: (args) => <SwapButton {...args} />,
};

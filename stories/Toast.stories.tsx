import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import DlToast from "../lib/components/Toast";
import Button from "../lib/components/Button";
import { useToast } from "../lib/components/Toast/useToast";

const meta: Meta<typeof DlToast> = {
  title: "DevLife UI/Toast",
  component: DlToast,
  argTypes: {
    position: {
      control: "radio",
      options: [
        "topLeft",
        "topCenter",
        "topRight",
        "bottomLeft",
        "bottomCenter",
        "bottomRight",
      ],
      description: "Position of `Toast` message",
      table: {
        defaultValue: { summary: '"topRight"' },
        type: {
          summary: "union",
        },
      },
    },
  },
  args: {
    position: "topRight",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DlToast>;

const Toast = (props: any) => {
  const { showToast } = useToast();

  return (
    <div style={{ display: "flex", gap: 10 }}>
      <Button
        buttonColor="success"
        onClick={() => showToast({ type: "success", message: "Toast message" })}
      >
        Show success
      </Button>
      <Button
        buttonColor="danger"
        onClick={() => showToast({ type: "error", message: "Toast message" })}
      >
        Show error
      </Button>
      <Button
        buttonColor="warning"
        onClick={() => showToast({ type: "warning", message: "Toast message" })}
      >
        Show warning
      </Button>
      <Button
        buttonColor="info"
        onClick={() => showToast({ type: "info", message: "Toast message" })}
      >
        Show info
      </Button>
      <DlToast position={props.position} />
    </div>
  );
};

export const Basic: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        code: `const { showToast } = useToast();

<Button
  buttonColor="success"
  onClick={() => showToast({ type: "success", message: "Toast message" })}
>
  Show success
</Button>
<Button
  buttonColor="danger"
  onClick={() => showToast({ type: "error", message: "Toast message" })}
>
  Show error
</Button>
<Button
  buttonColor="warning"
  onClick={() => showToast({ type: "warning", message: "Toast message" })}
>
  Show warning
</Button>
<Button
  buttonColor="info"
  onClick={() => showToast({ type: "info", message: "Toast message" })}
>
  Show info
</Button>

<DlToast position={position} />`,
        language: "tsx",
      },
    },
  },
  render: (args) => <Toast {...args} />,
};

import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import DlDialog from "../lib/components/Dialog";
import Button from "../lib/components/Button";

const meta: Meta<typeof DlDialog> = {
  title: "DevLife UI/Dialog",
  component: DlDialog,
  argTypes: {
    title: {
      control: "text",
      description: "Title of `Dialog`",
    },
    overlayCancel: {
      control: "boolean",
      description: "Enable click overlay to close dialog",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    hasFooterCancel: {
      control: "boolean",
      description: "Visible footer cancel button",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    hasFooterConfirm: {
      control: "boolean",
      description: "Visible footer confirm button",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    confirmTitle: {
      control: "text",
      description: "Label of confirm button",
      table: {
        defaultValue: {
          summary: '"Confirm"',
        },
      },
    },
    children: {
      control: "object",
      description: "Body content of `Dialog`",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    open: {
      control: "boolean",
      description: "Open status of `Dialog`",
    },
    onConfirm: {
      control: "object",
      description: "Click confirm button event",
    },
    onClose: {
      control: "object",
      description: "Close dialog event",
    },
  },
  args: {
    overlayCancel: false,
    hasFooterCancel: false,
    hasFooterConfirm: false,
    confirmTitle: "Confirm",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DlDialog>;

const Dialog = (props: any) => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Show dialog</Button>
      <DlDialog {...props} open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export const Basic: Story = {
  args: {
    title: "Edit profile",
    overlayCancel: true,
    hasFooterCancel: true,
    hasFooterConfirm: true,
    confirmTitle: "Save",
    children: "Body content",
  },
  render: (args) => <Dialog {...args} />,
};

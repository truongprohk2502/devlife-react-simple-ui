import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import DlDrawer from "../lib/components/Drawer";
import Button from "../lib/components/Button";

const meta: Meta<typeof DlDrawer> = {
  title: "DevLife UI/Drawer",
  component: DlDrawer,
  argTypes: {
    title: {
      control: "text",
      description: "Title of `Drawer`",
    },
    position: {
      control: "inline-radio",
      description: "Fixed position of `Drawer`",
    },
    overlayCancel: {
      control: "boolean",
      description: "Enable click overlay to close Drawer",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    disabledHeaderClose: {
      control: "boolean",
      description: "Hide header close button",
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
      description: "Body content of `Drawer`",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    open: {
      control: "boolean",
      description: "Open status of `Drawer`",
    },
    onConfirm: {
      control: "object",
      description: "Click confirm button event",
    },
    onClose: {
      control: "object",
      description: "Close Drawer event",
    },
  },
  args: {
    position: "right",
    overlayCancel: false,
    disabledHeaderClose: false,
    hasFooterCancel: false,
    hasFooterConfirm: false,
    confirmTitle: "Confirm",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DlDrawer>;

const Drawer = (props: any) => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Show Drawer</Button>
      <DlDrawer {...props} open={open} onClose={() => setOpen(false)} />
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
  render: (args) => <Drawer {...args} />,
};

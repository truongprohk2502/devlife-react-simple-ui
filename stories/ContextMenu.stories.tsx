import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import ContextMenu from "../lib/components/ContextMenu";
import { ArrowBigLeft, ArrowBigRight, PrinterIcon } from "lucide-react";

const meta: Meta<typeof ContextMenu> = {
  title: "DevLife UI/ContextMenu",
  decorators: [
    (Story) => (
      <div style={{ paddingBottom: "16rem", paddingRight: "14rem" }}>
        {Story()}
      </div>
    ),
  ],
  component: ContextMenu,
  argTypes: {
    items: {
      control: "object",
      description: "List of items",
    },
    children: {
      control: "object",
      description: "Main context",
    },
  },
  args: {},
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ContextMenu>;

export const Basic: Story = {
  args: {
    items: [
      {
        type: "action",
        label: "Back",
        subLabel: <ArrowBigLeft width={14} height={14} />,
        onClick: () => console.log("Back"),
      },
      {
        type: "action",
        label: "Forward",
        subLabel: <ArrowBigRight width={14} height={14} />,
        disabled: true,
        onClick: () => console.log("Forward"),
      },
      {
        type: "action",
        label: "Print",
        icon: <PrinterIcon width={14} height={14} />,
        onClick: () => console.log("Print"),
      },
      {
        type: "divider",
      },
      {
        type: "checkbox",
        label: "Dark mode",
        checked: true,
        onChange: (checked: boolean) => console.log(checked),
      },
      {
        type: "checkbox",
        label: "Auto scroll",
        checked: false,
        onChange: (checked: boolean) => console.log(checked),
      },
      {
        type: "divider",
      },
      {
        type: "label",
        label: "People",
      },
      {
        type: "divider",
      },
      {
        type: "radio",
        name: "framework",
        label: "ReactJS",
        selected: true,
        onSelect: () => console.log("ReactJS"),
      },
      {
        type: "radio",
        name: "framework",
        label: "VueJS",
        selected: false,
        onSelect: () => console.log("VueJS"),
      },
    ],
    children: (
      <div
        style={{ height: "16rem" }}
        className="w-full rounded-lg border border-dashed flex justify-center items-center"
      >
        <span className="font-bold text-lg">Right-click Context</span>
      </div>
    ),
  },
};

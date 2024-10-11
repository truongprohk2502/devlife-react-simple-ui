import { StoryObj, Meta } from "@storybook/react";
import Breadcrumb from "../lib/components/Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "DevLife UI/Breadcrumb",
  component: Breadcrumb,
  argTypes: {
    items: {
      control: "object",
      description: "List of items",
    },
    separator: {
      control: "inline-radio",
      description: "Separator character between each item",
    },
    disabled: {
      control: "boolean",
      description: "Disable `Breadcrumb`",
      table: { defaultValue: { summary: "false" } },
    },
    hasCollapse: {
      control: "boolean",
      description: "Whether collapse when `Breadcrumb` is too long",
      table: { defaultValue: { summary: "false" } },
    },
    itemsBeforeCollapse: {
      control: "number",
      description: "Maximum items before selected item when collapsing",
      table: { defaultValue: { summary: "1" } },
    },
    itemsAfterCollapse: {
      control: "number",
      description: "Maximum items after selected item when collapsing",
      table: { defaultValue: { summary: "2" } },
    },
    onClick: {
      control: "object",
      description: "Click item event",
    },
  },
  args: {
    separator: "arrow",
    disabled: false,
    hasCollapse: false,
    itemsBeforeCollapse: 1,
    itemsAfterCollapse: 2,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Basic: Story = {
  args: {
    items: [
      { label: "Home", value: "/home" },
      { label: "Music", value: "/music" },
      { label: "Genre", value: "/genre" },
      { label: "Album", value: "/album" },
      { label: "Song", value: "/song" },
    ],
  },
};

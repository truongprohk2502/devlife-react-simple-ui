import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import SortableList from "../lib/components/SortableList";

const meta: Meta<typeof SortableList> = {
  title: "DevLife UI/SortableList",
  component: SortableList,
  decorators: [(Story) => <div style={{ padding: "1rem" }}>{Story()}</div>],
  argTypes: {
    className: {
      control: "text",
      description: "Wrapper class name",
    },
    data: {
      control: "object",
      description: "List items of `SortableList`",
      table: {
        type: {
          summary: "any[]",
        },
      },
    },
    renderItem: {
      control: "object",
      description: "Render function of `SortableList`",
      table: {
        type: {
          summary: "function",
        },
      },
    },
    onChange: {
      control: "object",
      description: "Ordered change event of `SortableList`",
    },
  },
  args: {},
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SortableList>;

export const Basic: Story = {
  args: {
    data: [
      { id: "1", name: "John Doe" },
      { id: "2", name: "Jane Jolly" },
      { id: "3", name: "Bob Smith" },
      { id: "4", name: "Alice Branco" },
    ],
    renderItem: (item) => item.name,
  },
};

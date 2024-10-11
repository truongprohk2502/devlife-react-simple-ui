import { StoryObj, Meta } from "@storybook/react";
import DlPagination from "../lib/components/Pagination";
import React from "react";

const meta: Meta<typeof DlPagination> = {
  title: "DevLife UI/Pagination",
  component: DlPagination,
  argTypes: {
    total: {
      control: "number",
      description: "Total pages count",
    },
    current: {
      control: "number",
      description: "Current page",
    },
    siblings: {
      control: "number",
      description: "The number of siblings page is visible beside current page",
    },
    showControls: {
      control: "boolean",
      description: "Visible to `Prev` and `Next` buttons",
    },
    variant: {
      control: "radio",
      options: ["solid", "separated", "outline"],
      description: "Theme variant of `Pagination`",
      table: {
        defaultValue: { summary: '"solid"' },
        type: {
          summary: "union",
        },
      },
    },
    className: {
      control: "text",
      description: "Wrapper class name",
    },
    onChange: {
      control: "object",
      description: "Change page event",
    },
  },
  args: {
    siblings: 1,
    showControls: false,
    variant: "solid",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DlPagination>;

const Pagination = (props: any) => {
  const [current, setCurrent] = React.useState<number>(1);

  return <DlPagination {...props} current={current} onChange={setCurrent} />;
};

export const Basic: Story = {
  args: {
    total: 10,
  },
  render: (args) => <Pagination {...args} />,
};

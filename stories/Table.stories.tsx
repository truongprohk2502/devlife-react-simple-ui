import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import DlTable from "../lib/components/Table";

const TableColumn = `Array<{
  key: string;
  label: string;
  width?: string | number;
  sorter?: boolean;
}>`;

const meta: Meta<typeof DlTable> = {
  title: "DevLife UI/Table",
  component: DlTable,
  decorators: [
    (Story) => (
      <div style={{ height: "14rem", overflow: "hidden" }}>{Story()}</div>
    ),
  ],
  argTypes: {
    header: {
      control: "object",
      description: "List of `Table` header",
      table: {
        type: {
          summary: TableColumn,
        },
      },
    },
    data: {
      control: "object",
      description: "List of `Table` data",
      table: {
        type: {
          summary: "Array<object>",
        },
      },
    },
    keyField: {
      control: "text",
      description: "Key field of `Table` data",
    },
    stickyHeader: {
      control: "boolean",
      description: "Whether header is sticky to top",
    },
    isStriped: {
      control: "boolean",
      description: "`Table` row is striped",
    },
    variant: {
      control: "radio",
      options: ["outline", "underline", "bordered"],
      description: "Theme variant of `Table`",
    },
    color: {
      control: "radio",
      options: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "dark",
      ],
      description: "Color of `Table`",
      table: {
        defaultValue: { summary: '"primary"' },
        type: {
          summary: "union",
        },
      },
    },
    selectionMode: {
      control: "inline-radio",
      options: ["none", "single", "multiple"],
      description: "Selection mode of `Table`",
      table: {
        defaultValue: { summary: '"none"' },
        type: {
          summary: "union",
        },
      },
    },
    selections: {
      control: "object",
      description: "List of selected ids",
      table: {
        type: {
          summary: "Array<string>",
        },
      },
    },
    onChangeSelections: {
      control: "object",
      description: "Function when selection changes",
      table: {
        type: {
          summary: "(selections: string[]) => void",
        },
      },
    },
    className: {
      control: "text",
      description: "Wrapper class name",
    },
  },
  args: {
    stickyHeader: false,
    variant: "outline",
    color: "primary",
    selectionMode: "none",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DlTable>;

const Table = (props: any) => {
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

  return (
    <DlTable
      {...props}
      selections={selectedIds}
      onChangeSelections={setSelectedIds}
    />
  );
};

export const Basic: Story = {
  args: {
    keyField: "id",
    header: [
      { key: "name", label: "NAME", sorter: true },
      { key: "role", label: "ROLE" },
      { key: "status", label: "STATUS" },
    ],
    data: [
      {
        id: 1,
        name: "Truong Nguyen",
        role: "Frontend Developer",
        status: "Active",
      },
      {
        id: 2,
        name: "Truong Pro",
        role: "Backend Developer",
        status: "Inactive",
      },
      {
        id: 3,
        name: "Cris Ronaldo",
        role: "Attacker",
        status: "Active",
      },
      {
        id: 4,
        name: "Gigi Buffon",
        role: "Goalkeeper",
        status: "Active",
      },
      {
        id: 5,
        name: "Truong Nguyen",
        role: "Frontend Developer",
        status: "Active",
      },
      {
        id: 6,
        name: "Truong Pro",
        role: "Backend Developer",
        status: "Inactive",
      },
      {
        id: 7,
        name: "Cris Ronaldo",
        role: "Attacker",
        status: "Active",
      },
      {
        id: 8,
        name: "Gigi Buffon",
        role: "Goalkeeper",
        status: "Active",
      },
    ],
  },
  render: (args) => <Table {...args} />,
};

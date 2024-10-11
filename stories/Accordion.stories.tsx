import { StoryObj, Meta } from "@storybook/react";
import Accordion from "../lib/components/Accordion";
import AccordionItem from "../lib/components/Accordion/AccordionItem";

const meta: Meta<typeof Accordion> = {
  title: "DevLife UI/Accordion",
  component: Accordion,
  decorators: [
    (Story) => <div style={{ paddingBottom: "8rem" }}>{Story()}</div>,
  ],
  argTypes: {
    variant: {
      control: "radio",
      options: ["light", "bordered", "splitted"],
      description: "Theme variant of `Accordion`",
      table: { defaultValue: { summary: '"light"' } },
    },
    selectMode: {
      control: "inline-radio",
      options: ["single", "multiple"],
      description:
        "Whether allows select multiple accordion item at the same time",
      table: { defaultValue: { summary: '"single"' } },
    },
    className: {
      control: "text",
      description: "Wrapper class name",
    },
    children: {
      control: "object",
      description: "Contains child `AccordionItem` components",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
  },
  args: {
    variant: "light",
    selectMode: "single",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Basic: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem id="1" title="Accordion 1">
        Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Earum
        voluptate fugiat itaque blanditiis debitis quia quibusdam velit
        obcaecati unde provident expedita quisquam nostrum incidunt atque, sint
        repellat sit, iste eveniet. eveniet.
      </AccordionItem>
      <AccordionItem id="2" title="Accordion 2">
        Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Earum
        voluptate fugiat itaque blanditiis debitis quia quibusdam velit
        obcaecati unde provident expedita quisquam nostrum incidunt atque, sint
        repellat sit, iste eveniet.
      </AccordionItem>
      <AccordionItem id="3" title="Accordion 3">
        Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Earum
        voluptate fugiat itaque blanditiis debitis quia quibusdam velit
        obcaecati unde provident expedita quisquam nostrum incidunt atque, sint
        repellat sit, iste eveniet.
      </AccordionItem>
    </Accordion>
  ),
};

import { StoryObj, Meta } from "@storybook/react";
import Accordion from "../lib/components/Accordion";
import AccordionItem from "../lib/components/Accordion/AccordionItem";
import React from "react";

const meta: Meta<typeof AccordionItem> = {
  title: "DevLife UI/AccordionItem",
  component: AccordionItem,
  decorators: [
    (Story) => (
      <div style={{ minHeight: "8rem" }}>
        <Accordion variant="splitted">{Story()}</Accordion>
      </div>
    ),
  ],
  argTypes: {
    id: {
      control: "text",
      description: "Unique id of `AccordionItem`",
    },
    title: {
      control: "text",
      description: "Title of `AccordionItem`",
    },
    children: {
      description: "Body content of `AccordionItem`",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AccordionItem>;

export const Basic: Story = {
  args: {
    id: "1",
    title: "My title",
    children: "This is content",
  },
};

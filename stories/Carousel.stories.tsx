import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import DlCarousel from "../lib/components/Carousel";

const meta: Meta<typeof DlCarousel> = {
  title: "DevLife UI/Carousel",
  component: DlCarousel,
  argTypes: {
    show: {
      control: "number",
      description: "Number of items to show",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    infiniteLoop: {
      control: "boolean",
      description: "Whether to loop the carousel",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    showIndicator: {
      control: "boolean",
      description: "Whether to show the indicator",
    },
    autoplay: {
      control: "number",
      description: "Autoplay interval in milliseconds. Needs `infiniteLoop` to be true",
      table: {
        type: {
          summary: "number | undefined",
        },
      },
    },
    children: {
      control: "object",
      description: "Content of `Carousel`",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
  },
  args: {
    infiniteLoop: true,
    showIndicator: true,
    autoplay: 3000,
    show: 1,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DlCarousel>;

const Carousel = (props) => {
  return (
    <DlCarousel {...props}>
      <div
        style={{ height: "24rem" }}
        className="bg-neutral-500 flex justify-center items-center"
      >
        1
      </div>
      <div
        style={{ height: "24rem" }}
        className="bg-blue-500 flex justify-center items-center"
      >
        2
      </div>
      <div
        style={{ height: "24rem" }}
        className="bg-green-500 flex justify-center items-center"
      >
        3
      </div>
      <div
        style={{ height: "24rem" }}
        className="bg-red-500 flex justify-center items-center"
      >
        4
      </div>
      <div
        style={{ height: "24rem" }}
        className="bg-cyan-500 flex justify-center items-center"
      >
        5
      </div>
    </DlCarousel>
  );
};

export const Basic: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        code: `<Carousel show={1} infiniteLoop={true}>
  <h1>1</h1>
  <h1>2</h1>
  <h1>3</h1>
  <h1>4</h1>
  <h1>5</h1>
</Carousel>`,
        language: "tsx",
      },
    },
  },
  render: (args) => <Carousel {...args} />,
};

import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import TreeView from "../lib/components/TreeView";
import { ImageIcon, VideoIcon } from "lucide-react";

const meta: Meta<typeof TreeView> = {
  title: "DevLife UI/TreeView",
  component: TreeView,
  argTypes: {
    data: {
      control: "object",
      description:
        "Data of `TreeView`. \n `interface TreeInfo {\nkey: string,\nlabel: string,\niconType?: string,\nchildNodes?: TreeInfo[]\n}`",
    },
    icons: {
      control: "object",
      description: "Icons of `TreeView`",
    },
    expandAll: {
      control: "boolean",
      description: "Initially expand all of `TreeView`",
    },
    showIcon: {
      control: "boolean",
      description: "Show icon of `TreeView`",
    },
    showVerticalLine: {
      control: "boolean",
      description: "Show vertical line of `TreeView`",
    },
  },
  args: { expandAll: false, showIcon: true, showVerticalLine: true },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TreeView>;

export const Basic: Story = {
  args: {
    data: [
      {
        key: "0",
        label: "Documents",
        childNodes: [
          {
            key: "0-0",
            label: "Media",
            childNodes: [
              {
                key: "0-1-1",
                label: "preview.mp4",
                iconType: "video",
              },
              {
                key: "0-1-2",
                label: "beautiful_girl.png",
                iconType: "image",
              },
            ],
          },
        ],
      },
      {
        key: "1",
        label: "Desktop",
        childNodes: [
          {
            key: "1-0",
            label: "document1.doc",
          },
          {
            key: "0-0",
            label: "documennt-2.doc",
          },
        ],
      },
      {
        key: "2",
        label: "Downloads",
        childNodes: [],
      },
    ],
    icons: {
      video: <VideoIcon width={16} height={16} />,
      image: <ImageIcon width={16} height={16} />,
    },
  },
};

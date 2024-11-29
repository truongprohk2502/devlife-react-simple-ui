import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import ScrollTop from "../lib/components/ScrollTop";

const meta: Meta<typeof ScrollTop> = {
  title: "DevLife UI/ScrollTop",
  component: ScrollTop,
  decorators: [
    (Story) => <div style={{ paddingBottom: "8rem" }}>{Story()}</div>,
  ],
  argTypes: {
    offsetTop: {
      control: "number",
      description: "Scroll top offset",
    },
    parent: {
      control: "radio",
      options: ["window", "element"],
      description: "Scroll parent",
      table: { defaultValue: { summary: '"window"' } },
    },
    className: {
      control: "text",
      description: "Wrapper class name",
    },
    children: {
      control: "object",
      description: "Child of `ScrollTop`",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
  },
  args: {
    parent: "window",
    offsetTop: 200,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ScrollTop>;

export const Basic: Story = {
  parameters: {
    docs: {
      source: {
        code: `<ScrollTop offsetTop={200} parent="window" />`,
        language: "tsx",
      },
    },
  },
  render: (args) => (
    <div>
      <p>When biting Boreas, fell and doure,</p>
      <p>Sharp shivers thro' the leafless bow'r;</p>
      <p>When Phoebus gies a short-liv'd glow'r,</p>
      <p>Far south the lift,</p>
      <p>Dim-dark'ning thro' the flaky show'r,</p>
      <p>Or whirling drift:</p>
      <p></p>
      <p>Ae night the storm the steeples rocked,</p>
      <p>Poor Labour sweet in sleep was locked,</p>
      <p>While burns, wi' snawy wreeths upchoked,</p>
      <p>Wild-eddying swirl,</p>
      <p>Or thro' the mining outlet bocked,</p>
      <p>Down headlong hurl.</p>
      <p></p>
      <p>List'ning, the doors an' winnocks rattle,</p>
      <p>I thought me on the ourie cattle,</p>
      <p>Or silly sheep, wha bide this brattle</p>
      <p>O' winter war,</p>
      <p>And thro' the drift, deep-lairing, sprattle,</p>
      <p>Beneath a scar.</p>
      <p></p>
      <p>Ilk happing bird, wee, helpless thing!</p>
      <p>That, in the merry months o' spring,</p>
      <p>Delighted me to hear thee sing,</p>
      <p>What comes o' thee?</p>
      <p>Whare wilt thou cow'r thy chittering wing</p>
      <p>An' close thy e'e?</p>
      <p></p>
      <p>Ev'n you on murd'ring errands toil'd,</p>
      <p>Lone from your savage homes exil'd,</p>
      <ScrollTop {...args} />
    </div>
  ),
};

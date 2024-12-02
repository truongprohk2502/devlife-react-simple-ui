import React, { useState } from "react";
import { StoryObj, Meta } from "@storybook/react";
import DlTerminal from "../lib/components/Terminal";
import { CommandLine } from "../lib/components/Terminal/types";

const meta: Meta<typeof DlTerminal> = {
  title: "DevLife UI/Terminal",
  component: DlTerminal,
  decorators: [(Story) => <div style={{ padding: "1rem" }}>{Story()}</div>],
  argTypes: {
    welcome: {
      control: "text",
      description: "Welcome message of `Terminal`",
    },
    prompt: {
      control: "text",
      description: "Prompt of `Terminal`",
    },
    className: {
      control: "text",
      description: "Wrapper class name",
    },
    commands: {
      control: "object",
      description: "List of commands of `Terminal`",
      table: {
        type: {
          summary: "CommandLine[]",
        },
      },
    },
    onCommand: {
      control: "object",
      description: "Enter command event of `Terminal`",
    },
  },
  args: {
    welcome: `Welcome to Terminal\n\t- Type 'date' to get the current date\n\t- Type 'random' to get a random number\n\t- Type 'print [text]' to print text\n\t- Type 'clear' to clear the terminal`,
    prompt: "devlife $",
  },
  tags: ["autodocs"],
};

export default meta;

const Terminal = (props) => {
  const [commands, setCommands] = useState<CommandLine[]>([]);

  const handleCommand = (command: string) => {
    if (command === "date") {
      setCommands((prev) => [
        ...prev,
        {
          prompt: "devlife $",
          command: "date",
          output: new Date().toString(),
          type: "success",
        },
      ]);
    } else if (command === "random") {
      setCommands((prev) => [
        ...prev,
        {
          prompt: "devlife $",
          command,
          output: Math.floor(Math.random() * 10).toString(),
          type: "success",
        },
      ]);
    } else if (command.startsWith("print ")) {
      setCommands((prev) => [
        ...prev,
        {
          prompt: "devlife $",
          command,
          output: command.replace("print ", ""),
          type: "success",
        },
      ]);
    } else if (command === "clear") {
      setCommands([]);
    } else {
      setCommands((prev) => [
        ...prev,
        {
          prompt: "devlife $",
          command,
          output: `Command '${command}' not found`,
          type: "error",
        },
      ]);
    }
  };

  return (
    <DlTerminal {...props} commands={commands} onCommand={handleCommand} />
  );
};

type Story = StoryObj<typeof Terminal>;

export const Basic: Story = {
  render: (args) => <Terminal {...args} />,
};

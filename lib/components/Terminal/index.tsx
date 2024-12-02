import React, { useRef } from "react";
import { cn } from "../../utils";
import type { CommandLine } from "./types";

interface Props {
  welcome: string;
  prompt: string;
  commands: CommandLine[];
  className?: string;
  onCommand?: (command: string) => void;
}

const Terminal: React.FC<Props> = ({
  welcome,
  prompt,
  commands,
  className,
  onCommand,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const value = useRef<string>("");

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleClick = () => {
    const input = inputRef.current;
    if (!input) return;
    input.focus();
    input.setSelectionRange(-1, -1);
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    value.current = e.target.value;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onCommand?.(value.current);
      value.current = "";
      inputRef.current!.value = "";
      setTimeout(() => {
        scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
      });
    }
  };

  return (
    <div
      ref={scrollRef}
      className={cn(
        "bg-neutral-900 rounded-md px-4 py-6 text-sm font-semibold overflow-auto",
        className,
      )}
      onClick={handleClick}
    >
      <p className="text-white whitespace-pre">{welcome}</p>
      {commands.map((item, index) => (
        <div key={index} className="mt-2">
          <div className="flex items-center text-white">
            <p className="text-neutral-400">{item.prompt}</p>
            <p className="ml-2 text-neutral-100">{item.command}</p>
          </div>
          {item.output && (
            <p
              className={cn("mt-1 whitespace-pre", {
                "text-lime-300": item.type === "success",
                "text-red-400": item.type === "error",
              })}
            >
              {item.output}
            </p>
          )}
        </div>
      ))}
      <div className="mt-2">
        <div className="flex items-center text-white">
          <p className="text-neutral-400">{prompt}</p>
          <div className="ml-2 text-neutral-100 flex-1">
            <input
              ref={inputRef}
              type="text"
              className="w-full bg-transparent outline-none"
              onClick={stopPropagation}
              onChange={handleChangeText}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;

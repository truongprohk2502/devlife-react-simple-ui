import React, { useRef, useState } from "react";
import useClickAway from "../../hooks/useClickAway";
import { cn } from "../../utils";

const OPTION_HEIGHT = 32;

enum PositionType {
  Top,
  Bottom,
}

interface Props {
  value: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  options: string[];
  onChange: (value: string) => void;
}

const Autocomplete: React.FC<Props> = ({
  value,
  placeholder,
  className,
  disabled,
  options,
  onChange,
}) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [opening, setOpening] = useState<boolean>(false);
  const [position, setPosition] = useState<PositionType>(PositionType.Top);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const filteredOptions = value.trim()
    ? options.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
    : options;

  const closeDropdown = () => {
    setOpening(false);
    setSelectedOption(null);
    scrollRef.current?.scrollTo(0, 0);
  };

  useClickAway(dropdownRef, closeDropdown);

  const scrollToSelectedOption = (direction: "up" | "down", index: number) => {
    const optionHeight = scrollRef.current!.getBoundingClientRect().height;
    const scrollBottom =
      scrollRef.current!.scrollHeight -
      optionHeight -
      scrollRef.current!.scrollTop;

    if (direction === "up") {
      if (index === filteredOptions.length - 1) {
        scrollRef.current!.scrollTo(
          0,
          scrollRef.current!.scrollHeight - optionHeight,
        );
      } else {
        const optionToTop = index * OPTION_HEIGHT;
        if (optionToTop < scrollRef.current!.scrollTop) {
          scrollRef.current!.scrollBy(0, -optionHeight / 2);
        }
      }
    } else {
      if (index === 0) {
        scrollRef.current!.scrollTo(0, 0);
      } else {
        const optionToBottom =
          OPTION_HEIGHT * (filteredOptions.length - 1 - index);
        if (optionToBottom < scrollBottom) {
          scrollRef.current!.scrollBy(0, optionHeight / 2);
        }
      }
    }
  };

  const pressKeyDown = () => {
    const currentIndex = selectedOption
      ? filteredOptions.indexOf(selectedOption)
      : -1;
    const nextIndex = (currentIndex + 1) % filteredOptions.length;
    setSelectedOption(filteredOptions[nextIndex]);
    scrollToSelectedOption("down", nextIndex);
  };

  const pressKeyUp = () => {
    const currentIndex = selectedOption
      ? filteredOptions.indexOf(selectedOption)
      : 1;
    const nextIndex =
      (currentIndex - 1 + filteredOptions.length) % filteredOptions.length;
    setSelectedOption(filteredOptions[nextIndex]);
    scrollToSelectedOption("up", nextIndex);
  };

  const handleSelect = (value: string) => {
    closeDropdown();
    onChange(value);
  };

  const handleFocus = () => {
    const { bottom } = dropdownRef.current!.getBoundingClientRect();
    const distanceToBottom = window.innerHeight - bottom;
    setPosition(
      distanceToBottom > 230 ? PositionType.Bottom : PositionType.Top,
    );
    setOpening(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSelect(selectedOption || "");
    } else if (e.key === "Escape") {
      closeDropdown();
    } else if (e.key === "ArrowDown") {
      pressKeyDown();
    } else if (e.key === "ArrowUp") {
      pressKeyUp();
    } else {
      handleFocus();
    }
  };

  const handleChange = (value: string) => {
    onChange(value);
  };

  const handleHover = (val: string) => {
    setSelectedOption(val);
  };

  return (
    <div ref={dropdownRef} className={cn("w-[12rem] relative", className)}>
      <div
        className={cn(
          "rounded-md border flex items-center px-4 py-2",
          {
            "border-neutral-300 text-neutral-300": disabled,
            "border-neutral-400 text-neutral-600 hover:border-cyan-500":
              !disabled,
          },
          { "border-cyan-500": opening },
        )}
      >
        <input
          type="text"
          className="w-full focus:outline-none text-sm"
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={handleFocus}
          onKeyDown={handleKeyPress}
        />
      </div>
      <div
        ref={scrollRef}
        className={cn(
          "absolute left-0 max-w-[calc(100%+2rem)] border bg-white border-neutral-200 rounded-md min-w-full max-h-[13rem] overflow-auto z-10",
          {
            "bottom-[calc(100%+0.5rem)]": position === PositionType.Top,
            "top-[calc(100%+0.5rem)]": position === PositionType.Bottom,
          },
          { hidden: !opening || filteredOptions.length === 0 },
        )}
      >
        {filteredOptions.map((item) => (
          <p
            key={item}
            style={{ height: OPTION_HEIGHT }}
            className={cn(
              "px-3 flex items-center text-sm font-medium cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis",
              { "bg-neutral-300": selectedOption === item },
            )}
            onClick={() => handleSelect(item)}
            onMouseEnter={() => handleHover(item)}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Autocomplete;

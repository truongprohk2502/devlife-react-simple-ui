import { ChevronDownIcon } from "lucide-react";
import { useRef, useState } from "react";
import useClickAway from "../../hooks/useClickAway";
import { cn } from "../../utils";

enum PositionType {
  Top,
  Bottom,
}

interface Props {
  value?: string | number | null;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  options?: Array<{ label: string; value: string }>;
  onChange?: (value: string) => void;
}

const Dropdown: React.FC<Props> = ({
  value,
  placeholder,
  className,
  disabled,
  options = [],
  onChange,
}) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [opening, setOpening] = useState<boolean>(false);
  const [position, setPosition] = useState<PositionType>(PositionType.Top);

  useClickAway(dropdownRef, () => setOpening(false));

  const handleSelect = (value: string) => {
    setOpening(false);
    onChange?.(value);
  };

  const handleOpen = () => {
    const { bottom } = dropdownRef.current!.getBoundingClientRect();
    const distanceToBottom = window.innerHeight - bottom;
    setPosition(
      distanceToBottom > 230 ? PositionType.Bottom : PositionType.Top
    );
    setOpening(true);
  };

  const selectedOption = options.find((item) => item.value === value);

  return (
    <div
      ref={dropdownRef}
      className={cn("w-[12rem] h-[2.375rem] relative", className)}
    >
      <div
        className={cn(
          "rounded-md border flex items-center px-4 h-full",
          {
            "border-neutral-300 text-neutral-300 cursor-not-allowed": disabled,
            "border-neutral-400 text-neutral-600 hover:border-cyan-500 cursor-pointer":
              !disabled,
          },
          { "border-cyan-500": opening }
        )}
        onClick={() => !disabled && handleOpen()}
      >
        <p
          className={cn(
            "text-sm pr-2 flex-1 w-full overflow-hidden whitespace-nowrap text-ellipsis",
            selectedOption ? "text-neutral-700 font-medium" : "text-neutral-400"
          )}
        >
          {selectedOption?.label || placeholder}
        </p>
        <ChevronDownIcon className="w-4 h-4" />
      </div>
      <div
        className={cn(
          "absolute left-0 max-w-[calc(100%+2rem)] border bg-white border-neutral-200 rounded-md min-w-full max-h-[13rem] py-2 overflow-auto z-10",
          {
            "bottom-[calc(100%+0.5rem)]": position === PositionType.Top,
            "top-[calc(100%+0.5rem)]": position === PositionType.Bottom,
          },
          { hidden: !opening }
        )}
      >
        {options.map((item) => (
          <p
            key={item.value}
            className="px-3 py-1 hover:bg-neutral-100 text-sm font-medium cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis"
            onClick={() => handleSelect(item.value)}
          >
            {item.label}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;

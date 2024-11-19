import React from "react";
import { cn } from "../../utils";

interface Props {
  animation?: "none" | "fade" | "spin" | "flip";
  on: boolean;
  onItem: React.ReactNode;
  offItem: React.ReactNode;
  className?: string;
  onToggle: () => void;
}

const SwapButton: React.FC<Props> = ({
  animation = "none",
  on,
  onItem,
  offItem,
  className,
  onToggle,
}) => {
  return (
    <div
      className={cn("relative cursor-pointer w-fit", className)}
      onClick={onToggle}
    >
      <div
        className={cn(
          "select-none",
          {
            "transition-all duration-150": animation !== "none",
          },
          animation === "none" && {
            visible: on,
            invisible: !on,
          },
          animation === "fade" && {
            "opacity-100": on,
            "opacity-0": !on,
          },
          animation === "spin" && {
            "opacity-100 rotate-0": on,
            "opacity-0 -rotate-90": !on,
          },
          animation === "flip" && {
            "opacity-100 scale-x-100": on,
            "opacity-0 scale-x-0": !on,
          }
        )}
      >
        {onItem}
      </div>
      <div
        className={cn(
          "absolute inset-0 select-none",
          {
            "transition-all duration-150": animation !== "none",
          },
          animation === "none" && {
            invisible: on,
            visible: !on,
          },
          animation === "fade" && {
            "opacity-0": on,
            "opacity-100": !on,
          },
          animation === "spin" && {
            "opacity-0 rotate-90": on,
            "opacity-100 rotate-0": !on,
          },
          animation === "flip" && {
            "opacity-0 scale-x-0": on,
            "opacity-100 scale-x-100": !on,
          }
        )}
      >
        {offItem}
      </div>
    </div>
  );
};

export default SwapButton;

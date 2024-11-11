import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { cn } from "../../utils";

interface Props {
  type: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}

const ArrowButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ type, disabled, onClick }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={cn(
          "absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-md z-[1]",
          "bg-white opacity-80 disabled:opacity-50",
          "flex justify-center items-center",
          type === "prev" ? "left-6" : "right-6",
        )}
        disabled={disabled}
      >
        {type === "prev" ? (
          <ChevronLeftIcon width={24} height={24} />
        ) : (
          <ChevronRightIcon width={24} height={24} />
        )}
      </button>
    );
  },
);

ArrowButton.displayName = "ArrowButton";

export default ArrowButton;


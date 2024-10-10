import React from "react";
import { cn } from "../../utils";

interface Props {
  shape?: "square" | "circle";
  width?: string | number;
  height?: string | number;
}

const Skeleton: React.FC<Props> = ({
  shape = "square",
  width = "100%",
  height = "auto",
}) => {
  return (
    <div
      className={cn(
        "bg-neutral-300 flex-shrink-0 flex-grow-0 shadow-md relative overflow-hidden",
        {
          "rounded-full aspect-square": shape === "circle",
          "rounded-md": shape === "square",
        }
      )}
      style={{ width, height }}
    >
      <div
        className="animate-skeleton absolute inset-0"
        style={{
          background: `linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0,
            rgba(255, 255, 255, 0) 25%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 75%,
            rgba(255, 255, 225, 0)
          )`,
        }}
      />
    </div>
  );
};

export default Skeleton;

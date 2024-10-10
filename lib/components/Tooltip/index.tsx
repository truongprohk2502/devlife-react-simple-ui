import React, { useCallback } from "react";
import { tooltipVariants } from "./helpers";
import { cn } from "../../utils";

interface TooltipProps {
  title: string;
  position?: "top" | "right" | "bottom" | "left";
  tooltipClassName?: string;
  className?: string;
  width?: string | number;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  title,
  position = "top",
  tooltipClassName,
  className,
  width,
  children,
}) => {
  const refCallback = useCallback(
    (el: HTMLDivElement | null) => {
      if (!el) return;

      switch (position) {
        case "top":
        case "bottom":
          el.style.marginTop = "0px";
          el.style.marginLeft = `-${el.clientWidth / 2}px`;
          break;
        case "left":
        case "right":
          el.style.marginLeft = "0px";
          el.style.marginTop = `-${el.clientHeight / 2}px`;
          break;
        default:
          break;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [position, title]
  );

  return (
    <div className={cn("relative w-fit group", className)}>
      {children}
      <div
        ref={refCallback}
        style={{ width: width || "auto" }}
        className={cn(tooltipVariants({ position }), tooltipClassName)}
      >
        {title}
      </div>
    </div>
  );
};

export default Tooltip;

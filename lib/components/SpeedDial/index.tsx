import { VariantProps } from "class-variance-authority";
import { PlusIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { itemVariants, wrapperVariants } from "./helpers";
import useClickAway from "../../hooks/useClickAway";
import { cn } from "../../utils";

interface Props
  extends VariantProps<typeof wrapperVariants>,
    VariantProps<typeof itemVariants> {
  items: Array<{ icon: React.ReactNode; onClick: () => void }>;
  className?: string;
}

const SpeedDial: React.FC<Props> = ({
  items,
  color = "primary",
  position = "bottom",
  className,
}) => {
  const [rendering, setRendering] = useState<boolean>(false);
  const [opening, setOpening] = useState<boolean>(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useClickAway(wrapperRef, () => setOpening(false));

  useEffect(() => {
    if (opening) setRendering(true);
  }, [opening]);

  const handleAnimationEnd = () => {
    if (!opening) setRendering(false);
  };

  return (
    <div className={cn("relative", className)}>
      <div
        ref={wrapperRef}
        className={wrapperVariants({ color })}
        onClick={() => setOpening(!opening)}
      >
        <PlusIcon
          width={28}
          height={28}
          className={cn("transition-transform duration-150", {
            "rotate-45": rendering,
          })}
        />
      </div>
      {rendering && (
        <div className={itemVariants({ position })}>
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                animationDelay: `${
                  (opening ? index : items.length - index) * 0.05
                }s`,
                animationDuration: `${0.05 * items.length}s`,
              }}
              className={cn(
                "w-12 h-12 rounded-full select-none fill-mode-forwards",
                "shadow-md bg-neutral-600 hover:bg-neutral-700",
                "flex justify-center items-center cursor-pointer",
                opening
                  ? "scale-0 animate-scale-in"
                  : "scale-1 animate-scale-out"
              )}
              onClick={item.onClick}
              onAnimationEnd={
                index === items.length - 1 ? handleAnimationEnd : undefined
              }
            >
              {item.icon}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SpeedDial;

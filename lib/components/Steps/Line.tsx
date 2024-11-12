import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils";

const variants = cva("h-0.5 mx-2 data-[active=false]:bg-neutral-300", {
  variants: {
    color: {
      primary: "data-[active=true]:bg-blue-500",
      secondary: "data-[active=true]:bg-neutral-500",
      success: "data-[active=true]:bg-green-500",
      danger: "data-[active=true]:bg-red-500",
      warning: "data-[active=true]:bg-yellow-500",
      info: "data-[active=true]:bg-cyan-500",
      light: "data-[active=true]:bg-neutral-400",
      dark: "data-[active=true]:bg-neutral-900",
    },
  },
});

interface Props extends VariantProps<typeof variants> {
  display: "active" | "inactive" | "hidden";
}

const Line: React.FC<Props> = ({ display, color }) => {
  return (
    <div
      data-active={display === "active"}
      className={cn(
        variants({ color }),
        display === "hidden" ? "opacity-0 flex-[1]" : "flex-[2]",
      )}
    />
  );
};

export default Line;

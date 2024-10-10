import React from "react";
import type { VariantProps } from "class-variance-authority";
import { progressBarVariants, progressVariants } from "./helpers";
import { cn } from "../../utils";

interface Props
  extends VariantProps<typeof progressVariants>,
    VariantProps<typeof progressBarVariants> {
  value: number;
  hasStripes?: boolean;
  animateStripes?: boolean;
  className?: string;
}

const Progress: React.FC<Props> = ({
  value,
  size,
  color,
  hasStripes,
  animateStripes,
  className,
}) => {
  return (
    <div className={cn(progressVariants({ size }), className)}>
      <div
        data-stripe={Boolean(hasStripes)}
        data-animate={Boolean(animateStripes)}
        className={progressBarVariants({ color })}
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default Progress;

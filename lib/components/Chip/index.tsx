import React from "react";
import { VariantProps } from "class-variance-authority";
import { CircleXIcon } from "lucide-react";
import {
  chipVariants,
  iconVariants,
  labelVariants,
  textColorVariants,
} from "./helpers";
import { cn } from "../../utils";

interface Props extends VariantProps<typeof chipVariants> {
  title: string;
  disabled?: boolean;
  hasRemove?: boolean;
  onRemove?: () => void;
}

const Chip: React.FC<Props> = ({
  title,
  variant = "solid",
  disabled = false,
  size,
  color,
  hasRemove,
  onRemove,
}) => {
  return (
    <div
      data-solid={variant === "solid"}
      data-disabled={disabled}
      className={chipVariants({ size, color, variant })}
    >
      <span
        data-solid={variant === "solid"}
        data-disabled={disabled}
        className={cn(
          labelVariants({ size }),
          textColorVariants({ color, variant })
        )}
      >
        {title}
      </span>
      {hasRemove && (
        <CircleXIcon
          data-solid={variant === "solid"}
          data-disabled={disabled}
          className={cn(
            iconVariants({ size }),
            textColorVariants({ color, variant })
          )}
          onClick={() => (disabled ? null : onRemove?.())}
        />
      )}
    </div>
  );
};

export default Chip;

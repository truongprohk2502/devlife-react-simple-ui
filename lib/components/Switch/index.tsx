import React from "react";
import { type VariantProps } from "class-variance-authority";
import { switchIconVariants, switchVariants } from "./helpers";

interface SwitchProps extends VariantProps<typeof switchVariants> {
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({
  checked,
  size,
  color,
  disabled,
  onChange,
}) => {
  return (
    <div
      data-disabled={Boolean(disabled).toString()}
      data-checked={Boolean(checked).toString()}
      className={switchVariants({ size, color })}
      onClick={() => onChange && !disabled && onChange(!checked)}
    >
      <div
        data-checked={Boolean(checked).toString()}
        className={switchIconVariants({ size })}
      />
    </div>
  );
};

export default Switch;

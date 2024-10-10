import { type VariantProps } from "class-variance-authority";
import { CheckIcon } from "lucide-react";
import React, { useId } from "react";
import { checkboxVariants, iconVariants, labelVariants } from "./helpers";
import { cn } from "../../utils";

interface Props
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof checkboxVariants> {
  checked: boolean;
  label?: string;
  onChangeChecked?: (checked: boolean) => void;
}

const Checkbox: React.FC<Props> = ({
  checkboxColor,
  inputSize,
  label,
  checked,
  disabled,
  onChangeChecked,
  ...props
}) => {
  const id = useId();

  return (
    <div className="flex items-center cursor-pointer">
      <div className="relative">
        <div
          data-disabled={Boolean(disabled).toString()}
          data-checked={Boolean(checked).toString()}
          className={checkboxVariants({ inputSize, checkboxColor })}
        >
          <CheckIcon
            className={cn(iconVariants({ inputSize }), { invisible: !checked })}
          />
        </div>
        <input
          {...props}
          type="checkbox"
          id={id}
          disabled={disabled}
          checked={checked}
          onChange={(e) => onChangeChecked && onChangeChecked(e.target.checked)}
          className="opacity-0 absolute inset-0"
        />
      </div>
      {label && (
        <label htmlFor={id} className={labelVariants({ inputSize })}>
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;

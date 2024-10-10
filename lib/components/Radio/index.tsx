import type { VariantProps } from "class-variance-authority";
import React, { useId } from "react";
import { labelVariants, radioVariants } from "./helpers";

interface Props
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof radioVariants> {
  checked: boolean;
  label?: string;
  onChangeChecked?: (
    checked: boolean,
    value: readonly string[] | string | number | undefined
  ) => void;
}

const Radio: React.FC<Props> = ({
  radioColor,
  inputSize,
  value,
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
          className={radioVariants({ inputSize, radioColor })}
        />
        <input
          {...props}
          type="radio"
          id={id}
          disabled={disabled}
          checked={checked}
          onChange={(e) =>
            onChangeChecked && onChangeChecked(e.target.checked, value)
          }
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

export default Radio;

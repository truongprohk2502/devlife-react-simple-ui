import type { VariantProps } from "class-variance-authority";
import React, { useState } from "react";
import {
  barWrapperVariants,
  colorVariants,
  thumbVariants,
  wrapperVariants,
  getInitValue,
} from "./helpers";
import { cn } from "../../utils";

interface Props
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof wrapperVariants>,
    VariantProps<typeof colorVariants> {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
}

const Slider: React.FC<Props> = ({
  disabled,
  value,
  defaultValue,
  min = 0,
  max = 100,
  sliderSize = "medium",
  bgColor = "primary",
  onChange,
  ...props
}) => {
  const [innerValue, setInnerValue] = useState<number>(
    getInitValue(value, defaultValue, min)
  );

  const percent = Math.abs(innerValue - min) / Math.abs(max - min);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = +e.target.value;
    setInnerValue(Number.isNaN(num) ? min : num);
    onChange?.(e);
  };

  return (
    <div className={wrapperVariants({ sliderSize })}>
      <div className={barWrapperVariants({ sliderSize })}>
        <div
          data-disabled={Boolean(disabled)}
          style={{ width: `${percent * 100}%` }}
          className={cn("absolute inset-0", colorVariants({ bgColor }))}
        />
      </div>
      <div
        data-disabled={Boolean(disabled)}
        style={{
          left: `calc(${percent} * (100% - ${
            sliderSize === "small" ? 1 : sliderSize === "medium" ? 1.5 : 1.75
          }rem))`,
        }}
        className={cn(
          colorVariants({ bgColor }),
          thumbVariants({ sliderSize })
        )}
      >
        {sliderSize === "large" && (
          <>
            <div className="absolute w-1/2 right-0 inset-y-0 bg-neutral-200" />
            <div
              data-disabled={Boolean(disabled)}
              className={cn(
                "absolute inset-0 rounded-r-full",
                colorVariants({ bgColor })
              )}
            />
          </>
        )}
        <div className="bg-white absolute inset-1 rounded-full" />
      </div>
      <input
        type="range"
        value={value}
        disabled={disabled}
        min={min}
        max={max}
        onChange={handleChange}
        className="absolute inset-0 opacity-0"
        {...props}
      />
    </div>
  );
};

export default Slider;

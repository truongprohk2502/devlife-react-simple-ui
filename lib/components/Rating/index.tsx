import type { VariantProps } from "class-variance-authority";
import React, { Fragment } from "react";
import { ratingVariants, starIconURI } from "./helpers";
import { cn } from "../../utils";

interface Props extends VariantProps<typeof ratingVariants> {
  value: number;
  total?: number;
  hasHalfValue?: boolean;
  disabled?: boolean;
  className?: string;
  onChange: (value: number) => void;
}

const Rating: React.FC<Props> = ({
  value,
  total = 5,
  hasHalfValue = false,
  disabled,
  className,
  color = "primary",
  size = "medium",
  onChange,
}) => {
  return (
    <div className={cn("flex items-center", className)}>
      {Array.from({ length: Math.floor(total) }, (_, i) => i + 1).map(
        (star) => (
          <Fragment key={star}>
            {Array.from({ length: 2 }).map((_, index) => {
              if (!hasHalfValue && index === 1) return null;

              const radioValue =
                hasHalfValue && index === 0 ? star - 0.5 : star;

              const maskImage = `url(${starIconURI})`;
              const maskPosition = hasHalfValue
                ? index
                  ? "right"
                  : "left"
                : "center";
              const maskSize = hasHalfValue ? "200%" : "contain";
              const maskRepeat = "no-repeat";

              return (
                <input
                  key={index}
                  type="radio"
                  name="rating"
                  value={radioValue}
                  data-checked={radioValue <= value}
                  data-left={index === 0 && star !== 1}
                  data-half={hasHalfValue}
                  disabled={disabled}
                  className={ratingVariants({ color, size })}
                  style={{
                    maskImage,
                    WebkitMaskImage: maskImage,
                    maskPosition,
                    WebkitMaskPosition: maskPosition,
                    maskSize,
                    WebkitMaskSize: maskSize,
                    maskRepeat,
                    WebkitMaskRepeat: maskRepeat,
                  }}
                  onChange={() => onChange(radioValue)}
                />
              );
            })}
          </Fragment>
        )
      )}
    </div>
  );
};

export default Rating;

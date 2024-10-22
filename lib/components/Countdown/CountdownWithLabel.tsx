import React from "react";
import { cva } from "class-variance-authority";
import { CountdownVariant, Size } from ".";
import { cn } from "../../utils";

const wrapperVariant = cva("flex", {
  variants: {
    variant: {
      colon_label: "items-center",
      line_label: "items-end",
      abbreviated_label: "items-end",
      bottom_label: "flex-col justify-center items-center",
      bottom_fill_label:
        "flex-col justify-center items-center bg-neutral-800 text-neutral-300",
    },
    size: {
      small: "text-2xl",
      medium: "text-4xl",
      large: "text-6xl",
    },
  },
  compoundVariants: [
    {
      variant: "bottom_fill_label",
      size: "small",
      className: "rounded-2xl px-0.5 pt-1.5 pb-2.5",
    },
    {
      variant: "bottom_fill_label",
      size: "medium",
      className: "rounded-3xl px-1 py-3",
    },
    {
      variant: "bottom_fill_label",
      size: "large",
      className: "rounded-3xl px-1 py-3",
    },
  ],
});

const labelVariant = cva("", {
  variants: {
    variant: {
      colon_label: "text-neutral-900",
      line_label: "text-neutral-500",
      abbreviated_label: "text-neutral-900",
      bottom_label: "text-neutral-500",
      bottom_fill_label: "text-lg text-neutral-200",
    },
    size: {
      small: "",
      medium: "",
      large: "",
    },
  },
  compoundVariants: [
    {
      variant: "colon_label",
      size: "large",
      className: "text-5xl mb-2",
    },
    {
      variant: "colon_label",
      size: "medium",
      className: "text-3xl mb-1",
    },
    {
      variant: "colon_label",
      size: "small",
      className: "text-xl mb-0.5",
    },
    {
      variant: "line_label",
      size: "large",
      className: "text-xl pb-2 mr-2",
    },
    {
      variant: "line_label",
      size: "medium",
      className: "text-lg pb-[1px] mr-1",
    },
    {
      variant: "line_label",
      size: "small",
      className: "text-base pb-[1px]",
    },
    {
      variant: "abbreviated_label",
      size: "large",
      className: "text-5xl mb-0.5",
    },
    {
      variant: "abbreviated_label",
      size: "medium",
      className: "text-3xl",
    },
    {
      variant: "abbreviated_label",
      size: "small",
      className: "text-xl",
    },
    {
      variant: "bottom_label",
      size: "large",
      className: "text-lg",
    },
    {
      variant: "bottom_label",
      size: "medium",
      className: "text-base",
    },
    {
      variant: "bottom_label",
      size: "small",
      className: "text-sm",
    },
    {
      variant: "bottom_fill_label",
      size: "large",
      className: "text-lg",
    },
    {
      variant: "bottom_fill_label",
      size: "medium",
      className: "text-sm",
    },
    {
      variant: "bottom_fill_label",
      size: "small",
      className: "text-xs",
    },
  ],
});

type CountdownUnit = "day" | "hour" | "minute" | "second";

interface Props {
  variant: CountdownVariant;
  type: CountdownUnit;
  size: Size;
  hidden?: boolean;
  children: React.ReactNode;
}

const CountdownWithLabel: React.FC<Props> = ({
  variant,
  type,
  size,
  hidden,
  children,
}) => {
  const getLabel = () => {
    switch (type) {
      case "day": {
        if (variant === "colon_label") return ":";
        if (variant === "abbreviated_label") return "d";
        return "days";
      }
      case "hour": {
        if (variant === "colon_label") return ":";
        if (variant === "abbreviated_label") return "h";
        return "hours";
      }
      case "minute": {
        if (variant === "colon_label") return ":";
        if (variant === "line_label") return "minutes";
        if (variant === "abbreviated_label") return "m";
        return "min";
      }
      case "second": {
        if (variant === "colon_label") return "";
        if (variant === "line_label") return "seconds";
        if (variant === "abbreviated_label") return "s";
        return "sec";
      }
      default:
        return "";
    }
  };

  return (
    <div className={cn(wrapperVariant({ variant, size }), { hidden })}>
      {children}
      <div className={labelVariant({ variant, size })}>{getLabel()}</div>
    </div>
  );
};

export default CountdownWithLabel;

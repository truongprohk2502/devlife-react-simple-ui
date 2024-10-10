import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Bounce from "./Bounce";
import Clip from "./Clip";
import Fade from "./Fade";
import Pulse from "./Pulse";
import Scale from "./Scale";

const colorVariants = cva("", {
  variants: {
    color: {
      primary: "#3b82f6",
      secondary: "#6b7280",
      success: "#22c55e",
      danger: "#ef4444",
      warning: "#eab308",
      info: "#06b6d4",
      light: "#d1d5db",
      dark: "#000000",
    },
  },
});

interface SpinnerProps extends VariantProps<typeof colorVariants> {
  variant?: "clip" | "fade" | "scale" | "bounce" | "pulse";
  size?: "small" | "medium" | "large";
}

const Loader: React.FC<SpinnerProps> = ({
  variant = "clip",
  color = "primary",
  size = "medium",
}) => {
  const colorValue = colorVariants({ color });

  return variant === "clip" ? (
    <Clip size={size} color={colorValue} />
  ) : variant === "fade" ? (
    <Fade size={size} color={colorValue} />
  ) : variant === "scale" ? (
    <Scale size={size} color={colorValue} />
  ) : variant === "bounce" ? (
    <Bounce size={size} color={colorValue} />
  ) : variant === "pulse" ? (
    <Pulse size={size} color={colorValue} />
  ) : null;
};

export default Loader;

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const sizeVariants = cva("flex justify-center items-center gap-1.5", {
  variants: {
    size: {
      small: "w-6 h-6",
      medium: "w-8 h-8",
      large: "w-12 h-12",
    },
  },
});

const barVariants = cva(
  "flex-shrink-0 h-full animate-[scale_0.9s_ease-in-out_infinite]",
  {
    variants: {
      size: {
        small: "w-[2px]",
        medium: "w-[3px]",
        large: "w-[4px]",
      },
    },
  }
);

interface Props extends VariantProps<typeof sizeVariants> {
  color: string;
}

const Scale: React.FC<Props> = ({ color, size }) => {
  return (
    <div className={sizeVariants({ size })}>
      {new Array(5).fill(null).map((_, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color,
            animationDelay: `-${index ? 0.9 - index * 0.1 : 0}s`,
            transform: `rotate(${index * 30}deg)`,
          }}
          className={barVariants({ size })}
        />
      ))}
    </div>
  );
};

export default Scale;

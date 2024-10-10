import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const sizeVariants = cva("relative inline-block w-[1em] h-[1em]", {
  variants: {
    size: {
      small: "text-[1.5rem]",
      medium: "text-[2rem]",
      large: "text-[3rem]",
    },
  },
});

interface Props extends VariantProps<typeof sizeVariants> {
  color: string;
}

const Fade: React.FC<Props> = ({ color, size }) => {
  return (
    <div className={sizeVariants({ size })}>
      {new Array(12).fill(null).map((_, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color,
            animationDelay: `${index * 0.083}s`,
            transform: `rotate(${index * 30}deg)`,
          }}
          className="absolute left-[0.4629em] bottom-0 w-[0.074em] h-[0.2777em] rounded-[0.0555em] origin-[center_-0.2222em] animate-[fade_1s_infinite_linear]"
        />
      ))}
    </div>
  );
};

export default Fade;

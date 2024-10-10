import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const sizeVariants = cva("relative flex items-center", {
  variants: {
    size: {
      small: "w-6 h-6",
      medium: "w-8 h-8",
      large: "w-12 h-12",
    },
  },
});

interface Props extends VariantProps<typeof sizeVariants> {
  color: string;
}

const Pulse: React.FC<Props> = ({ color, size }) => {
  return (
    <div className={sizeVariants({ size })}>
      {new Array(8).fill(null).map((_, index) => (
        <div
          key={index}
          style={{ transform: `rotate(${index * 45}deg)` }}
          className="absolute top-0 left-0 flex items-center w-full h-full"
        >
          <div
            style={{
              backgroundColor: color,
              animationDelay: `${(8 - index) * 0.125}s`,
            }}
            className="w-1/5 h-1/5 rounded-full scale-0 opacity-50 animate-[pulse_1.111s_ease-in-out_infinite]"
          />
        </div>
      ))}
    </div>
  );
};

export default Pulse;

import padStart from "lodash/padStart";
import React, { useImperativeHandle, useMemo, useRef } from "react";
import { Size } from ".";
import { cn } from "../../utils";

const getTextWidth = (size: Size) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d")!;
  const fontSize =
    size === "small" ? "24px" : size === "medium" ? "36px" : "60px";
  const extraWidth = size === "small" ? 2 : size === "medium" ? 3 : 6;
  context.font = `${fontSize} normal`;
  const inputText = "0";
  const width = context.measureText(inputText).width;
  canvas.remove();
  return width + extraWidth;
};

export type CountdownRef = {
  setTimeLeft: (time: number) => void;
};

interface Props {
  number: number;
  size: Size;
}

const CountdownItem = React.forwardRef<CountdownRef, Props>(
  ({ number, size }, ref) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const timeLeft = useRef<number>(number);

    const width = useMemo(() => {
      if (number < 100) {
        if (size === "large") return 5;
        if (size === "medium") return 3;
        return 2;
      } else {
        const charWidth = getTextWidth(size);
        const extraWidth = ((number.toString().length - 2) * charWidth) / 16;

        if (size === "large") return 5 + extraWidth;
        if (size === "medium") return 3 + extraWidth;
        return 2 + extraWidth;
      }
    }, [size, number]);

    const height = useMemo(() => {
      if (size === "large") return 4;
      if (size === "medium") return 2.5;
      return 2;
    }, [size]);

    useImperativeHandle(
      ref,
      () => ({
        setTimeLeft: (time: number) => {
          timeLeft.current = time;
          wrapperRef.current!.style.top = `-${time * height}rem`;
        },
      }),
      [height]
    );

    return (
      <div
        style={{
          width: `${width}rem`,
          height: `${height}rem`,
        }}
        className="relative overflow-hidden"
      >
        <div
          ref={wrapperRef}
          className={cn(
            "absolute inset-x-0 flex flex-col items-center transition-all duration-150 motion-reduce:transform-none"
          )}
        >
          <p style={{ lineHeight: `${height}rem` }} className="whitespace-pre">
            {Array.from({ length: number + 1 })
              .map((_, index) =>
                padStart(
                  index.toString(),
                  number < 100 ? 2 : number.toString().length,
                  "0"
                )
              )
              .join("\n")}
          </p>
        </div>
      </div>
    );
  }
);

export default CountdownItem;

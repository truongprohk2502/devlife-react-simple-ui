import React, { Children, useEffect, useRef, useState } from "react";
import ArrowButton from "./ArrowButton";
import { cn } from "../../utils";

interface Props {
  children: React.ReactNode;
  show?: number;
  infiniteLoop?: boolean;
}

const Carousel: React.FC<Props> = ({
  children,
  show = 1,
  infiniteLoop = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(
    infiniteLoop ? show : 0
  );
  const [length, setLength] = useState<number>(
    infiniteLoop
      ? Children.count(children) + show * 2
      : Children.count(children)
  );
  const [isRepeating, setIsRepeating] = useState<boolean>(
    infiniteLoop && Children.count(children) > show
  );

  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleChangeIndex = (index: number, animation: boolean) => {
    wrapperRef.current!.style.transition = animation
      ? "transform 0.15s linear"
      : "none";
    wrapperRef.current!.style.transform = `translateX(-${
      (index * 100) / show
    }%)`;
    setCurrentIndex(index);
  };

  useEffect(() => {
    setLength(
      infiniteLoop
        ? Children.count(children) + show * 2
        : Children.count(children)
    );
    setIsRepeating(infiniteLoop && Children.count(children) > show);
    handleChangeIndex(infiniteLoop ? show : 0, false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, infiniteLoop, show]);

  const next = () => {
    if (isRepeating || currentIndex < length - show) {
      handleChangeIndex(currentIndex + 1, true);
    }
  };

  const prev = () => {
    if (isRepeating || currentIndex > 0) {
      handleChangeIndex(currentIndex - 1, true);
    }
  };

  const handleTransitionEnd = () => {
    if (!isRepeating) return;

    if (currentIndex === 0) {
      handleChangeIndex(length - show * 2, false);
    } else if (currentIndex === length - show) {
      handleChangeIndex(show, false);
    }
  };

  const getList = () => {
    const childList = Children.toArray(children);
    const output = [];

    if (isRepeating) {
      for (let index = 0; index < show; index++) {
        output.unshift(childList[childList.length - 1 - index]);
      }
    }

    for (let index = 0; index < childList.length; index++) {
      output.push(childList[index]);
    }

    if (isRepeating) {
      for (let index = 0; index < show; index++) {
        output.push(childList[index]);
      }
    }

    return output;
  };

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex relative">
        <ArrowButton
          type="prev"
          disabled={!isRepeating && currentIndex <= 0}
          onClick={prev}
        />
        <div className="overflow-hidden w-full h-full">
          <div
            ref={wrapperRef}
            className="flex scrollbar-hide"
            onTransitionEnd={handleTransitionEnd}
          >
            {getList().map((child, index) => (
              <div
                key={index}
                style={{ width: `calc(100% / ${show})` }}
                className={cn("shrink-0 grow", { "p-2": show > 1 })}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
        <ArrowButton
          type="next"
          disabled={!isRepeating && currentIndex >= length - show}
          onClick={next}
        />
      </div>
    </div>
  );
};

export default Carousel;

import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../utils";

interface Props {
  imgSrcLeft: string;
  imgSrcRight: string;
  resizePosition?: number;
  size: { width: number; height: number } | { ratio: number };
  className?: string;
}

const ImageDiff: React.FC<Props> = ({
  imgSrcLeft,
  imgSrcRight,
  resizePosition = 50,
  size,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const targetImageRef = useRef<HTMLDivElement | null>(null);
  const resizeWrapperRef = useRef<HTMLDivElement | null>(null);
  const resizeButtonRef = useRef<HTMLDivElement | null>(null);

  const isClicked = useRef<boolean>(false);
  const startMouseX = useRef<number>(0);
  const posXBeforeMove = useRef<number>(0);

  const [calcWidth, setCalcWidth] = useState<number>(0);

  const width = "ratio" in size ? calcWidth : size.width;
  const height = "ratio" in size ? calcWidth / size.ratio : size.height;

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setCalcWidth(entry.contentRect.width);
      });
    });
    observer.observe(containerRef.current!);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const slider = resizeButtonRef.current!;

    const setPosition = (x: number) => {
      targetImageRef.current!.style.width = `${x}px`;
      resizeWrapperRef.current!.style.left = `${x - 16}px`;
    };

    const slideReady = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      isClicked.current = true;
      startMouseX.current =
        e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
      posXBeforeMove.current = targetImageRef.current!.offsetWidth;
    };

    const slideFinish = () => {
      isClicked.current = false;
    };

    const slideMove = (e: MouseEvent | TouchEvent) => {
      if (!isClicked.current) return;
      const movedX = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
      const diffX = posXBeforeMove.current + movedX - startMouseX.current;
      const newPosX = diffX < 16 ? 16 : diffX > width - 16 ? width - 16 : diffX;
      setPosition(newPosX);
    };

    setPosition((width * resizePosition) / 100);

    slider.addEventListener("mousedown", slideReady);
    slider.addEventListener("touchstart", slideReady);

    window.addEventListener("mouseup", slideFinish);
    window.addEventListener("touchend", slideFinish);

    window.addEventListener("mousemove", slideMove);
    window.addEventListener("touchmove", slideMove);

    return () => {
      slider.removeEventListener("mousedown", slideReady);
      slider.removeEventListener("touchstart", slideReady);

      window.removeEventListener("mouseup", slideFinish);
      window.removeEventListener("touchend", slideFinish);

      window.removeEventListener("mousemove", slideMove);
      window.removeEventListener("touchmove", slideMove);
    };
  }, [width, resizePosition]);

  return (
    <div
      ref={containerRef}
      style={{ width: width || "auto", height }}
      className={cn("relative rounded-lg overflow-hidden w-full", className)}
    >
      <div className="absolute overflow-hidden w-auto h-auto">
        <img
          style={{ width, height }}
          className="block align-middle object-cover"
          src={imgSrcRight}
        />
      </div>
      <div
        ref={targetImageRef}
        className="absolute overflow-hidden w-auto h-auto"
      >
        <img
          style={{ minWidth: width, width, height }}
          className="block align-middle object-cover"
          src={imgSrcLeft}
        />
      </div>
      <div ref={resizeWrapperRef} className="absolute inset-y-0 w-[32px]">
        <div className="w-[2px] h-full bg-white mx-auto" />
        <div className="absolute inset-0 flex items-center">
          <div
            ref={resizeButtonRef}
            className="w-[32px] h-[32px] rounded-full border border-neutral-200 bg-white cursor-ew-resize"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageDiff;

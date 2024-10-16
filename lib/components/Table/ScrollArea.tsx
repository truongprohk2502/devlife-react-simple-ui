import React from "react";
import debounce from "lodash/debounce";
import { useCallback, useEffect, useRef } from "react";
import { cn } from "../../utils";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const ScrollArea: React.FC<Props> = ({ className, children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const scrollThumbRef = useRef<HTMLDivElement>(null);
  const observer = useRef<ResizeObserver | null>(null);

  const thumbHeight = useRef<number>(20);
  const scrollStartPosition = useRef<number>(0);
  const initialScrollTop = useRef<number>(0);
  const isDragging = useRef<boolean>(false);
  const isHovering = useRef<boolean>(false);

  const handleResize = (ref: HTMLDivElement, trackSize: number) => {
    const { clientHeight, scrollHeight } = ref;
    thumbHeight.current = Math.max(
      (clientHeight / scrollHeight) * trackSize,
      20
    );
    scrollThumbRef.current!.style.height = `${thumbHeight.current}px`;
  };

  const handleTrackClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      e.stopPropagation();

      const { clientY } = e;
      const target = e.target as HTMLDivElement;
      const rect = target.getBoundingClientRect();
      const trackTop = rect.top;
      const thumbOffset = thumbHeight.current / 2;
      const clickRatio =
        (clientY - trackTop - thumbOffset) /
        scrollTrackRef.current!.clientHeight;
      const scrollAmount = Math.floor(
        clickRatio * contentRef.current!.scrollHeight
      );
      contentRef.current!.scrollTo({
        top: scrollAmount,
        behavior: "smooth",
      });
    },
    []
  );

  const handleThumbMousedown = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    scrollStartPosition.current = e.clientY;
    initialScrollTop.current = contentRef.current!.scrollTop;
    isDragging.current = true;
  };

  useEffect(() => {
    const handleThumbMouseup = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      isDragging.current = false;
    };

    const handleThumbMousemove = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (!isDragging.current) return;

      const {
        scrollHeight: contentScrollHeight,
        offsetHeight: contentOffsetHeight,
      } = contentRef.current!;
      console.log(initialScrollTop.current);

      const deltaY =
        (e.clientY - scrollStartPosition.current) *
        (contentOffsetHeight / thumbHeight.current);
      const newScrollTop = Math.min(
        initialScrollTop.current + deltaY,
        contentScrollHeight - contentOffsetHeight
      );

      contentRef.current!.scrollTop = newScrollTop;
    };

    document.addEventListener("mousemove", handleThumbMousemove);
    document.addEventListener("mouseup", handleThumbMouseup);
    document.addEventListener("mouseleave", handleThumbMouseup);

    return () => {
      document.removeEventListener("mousemove", handleThumbMousemove);
      document.removeEventListener("mouseup", handleThumbMouseup);
      document.removeEventListener("mouseleave", handleThumbMouseup);
    };
  }, []);

  useEffect(() => {
    const ref = contentRef.current!;
    const { clientHeight: trackSize } = scrollTrackRef.current!;

    handleResize(ref, trackSize);

    observer.current = new ResizeObserver(() => {
      handleResize(ref, trackSize);
    });

    observer.current.observe(ref);

    return () => {
      observer.current?.unobserve(ref);
    };
  }, []);

  useEffect(() => {
    const ref = contentRef.current!;

    const handleThumbPosition = () => {
      const { scrollTop: contentTop, scrollHeight: contentHeight } =
        contentRef.current!;
      const { clientHeight: trackHeight } = scrollTrackRef.current!;
      let newTop = (+contentTop / +contentHeight) * trackHeight;
      newTop = Math.min(newTop, trackHeight - thumbHeight.current);
      const thumb = scrollThumbRef.current!;
      thumb.style.top = `${newTop}px`;
    };

    ref.addEventListener("scroll", handleThumbPosition);

    return () => {
      ref.removeEventListener("scroll", handleThumbPosition);
    };
  }, []);

  useEffect(() => {
    const ref = contentRef.current!;

    const handleMouseLeaveDebounce = debounce(() => {
      if (isDragging.current || isHovering.current) return;
      scrollbarRef.current!.style.visibility = "hidden";
    }, 1000);

    const handleMouseEnter = () => {
      isHovering.current = true;
      scrollbarRef.current!.style.visibility = "visible";
    };

    const handleMouseLeave = () => {
      isHovering.current = false;
    };

    ref.addEventListener("mouseleave", handleMouseLeaveDebounce);
    ref.addEventListener("mouseleave", handleMouseLeave);
    ref.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseup", handleMouseLeaveDebounce);
    document.addEventListener("mouseleave", handleMouseLeaveDebounce);

    return () => {
      ref.removeEventListener("mouseleave", handleMouseLeaveDebounce);
      ref.removeEventListener("mouseleave", handleMouseLeave);
      ref.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseup", handleMouseLeaveDebounce);
      document.removeEventListener("mouseleave", handleMouseLeaveDebounce);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="w-full h-full relative">
      <div
        ref={contentRef}
        className={cn("w-full h-full overflow-auto scrollbar-hide", className)}
      >
        {children}
      </div>
      <div
        ref={scrollbarRef}
        className="absolute right-0 inset-y-0 w-2 rounded-md"
      >
        <div
          ref={scrollTrackRef}
          className="absolute inset-0 bg-neutral-200 rounded-md"
          onClick={handleTrackClick}
        />
        <div
          ref={scrollThumbRef}
          className="absolute inset-x-0 bg-neutral-400 rounded-md"
          onMouseDown={handleThumbMousedown}
        />
      </div>
    </div>
  );
};

export default ScrollArea;

import { ArrowUpIcon } from "lucide-react";
import React, { useCallback, useEffect, useRef } from "react";
import { cn } from "../../utils";

interface Props {
  parent?: "window" | "element";
  offsetTop?: number;
  children?: React.ReactNode;
  className?: string;
}

const ScrollTop: React.FC<Props> = ({
  parent = "window",
  offsetTop = 200,
  children,
  className,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  const getScrollElement = useCallback(() => {
    if (parent === "window") return window;

    const getScrollParent = (node: HTMLElement | null) => {
      if (node == null) return null;
      if (node.scrollHeight > node.clientHeight) return node;
      return getScrollParent(node.parentNode as HTMLElement);
    };

    return getScrollParent(buttonRef.current);
  }, [parent]);

  useEffect(() => {
    const scrollElement = getScrollElement();
    if (!scrollElement) return;

    const setShowButton = (show: boolean) => {
      if (!buttonRef.current) return;
      buttonRef.current.style.display = show ? "block" : "none";
    };

    const handleScroll = () => {
      if (scrollElement instanceof HTMLElement) {
        setShowButton(scrollElement!.scrollTop > offsetTop);
      } else {
        setShowButton(window.scrollY > offsetTop);
      }
    };

    handleScroll();

    scrollElement.addEventListener("scroll", handleScroll);

    return () => {
      scrollElement.removeEventListener("scroll", handleScroll);
    };
  }, [offsetTop, getScrollElement]);

  const handleClick = () => {
    const scrollElement = getScrollElement();
    scrollElement?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      ref={buttonRef}
      className={cn(
        "fixed bottom-8 right-16 z-50 transition-all duration-300 cursor-pointer",
        className,
      )}
      onClick={handleClick}
    >
      {children || (
        <div className="bg-neutral-500 rounded-full w-10 h-10 text-white flex justify-center items-center">
          <ArrowUpIcon width={20} height={20} />
        </div>
      )}
    </div>
  );
};

export default ScrollTop;

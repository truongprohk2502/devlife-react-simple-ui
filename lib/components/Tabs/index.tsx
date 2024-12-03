import React, { useEffect, useRef } from "react";
import { cn } from "../../utils";

interface Tab {
  title: string;
  disabled?: boolean;
}

interface Props {
  tabs: Tab[];
  variant?: "solid" | "bordered" | "underlined" | "ghost";
  size?: "small" | "medium" | "large";
  radius?: "none" | "medium" | "full";
  disabled?: boolean;
  selectedIndex: number;
  onChange: (index: number) => void;
}

const Tabs: React.FC<Props> = ({
  tabs,
  variant = "solid",
  size = "medium",
  radius = "medium",
  disabled,
  selectedIndex,
  onChange,
}) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<HTMLDivElement>(null);

  const tabSizes = useRef<Array<{ width: number; left: number }>>([]);

  const setTabPosition = (index: number) => {
    if (!tabRef.current) return;
    const { width, left } = tabSizes.current[index];
    animationRef.current!.style.width = `${width}px`;
    animationRef.current!.style.left = `${left}px`;
  };

  useEffect(() => {
    const getTabSizes = () => {
      if (!tabRef.current) return;
      tabSizes.current = Array.from(tabRef.current.children).map((tab) => ({
        width: tab.getBoundingClientRect().width,
        left: 0,
      }));
      if (tabSizes.current.length === 0) return;
      for (let i = 1; i < tabSizes.current.length; i++) {
        tabSizes.current[i].left =
          tabSizes.current[i - 1].left + tabSizes.current[i - 1].width;
      }
    };

    getTabSizes();
    setTabPosition(selectedIndex);

    const observer = new ResizeObserver(getTabSizes);
    observer.observe(tabRef.current!);

    return () => {
      observer.disconnect();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant, size, radius]);

  const handleChange = (tab: Tab, index: number) => {
    if (disabled || tab.disabled) return;
    setTabPosition(index);
    onChange(index);
  };

  return (
    <div
      className={cn(
        "flex py-1 relative overflow-hidden",
        {
          "rounded-md": radius === "medium",
          "rounded-full": radius === "full",
        },
        {
          "border border-neutral-400": variant === "bordered",
          "opacity-40": disabled,
        }
      )}
    >
      {variant === "solid" && (
        <div className="absolute inset-x-0 inset-y-0 bg-neutral-200 -z-10" />
      )}
      <div
        ref={animationRef}
        className="absolute inset-y-0 p-1 -z-10 transition-all duration-150"
      >
        {variant === "underlined" ? (
          <div className="w-full h-full border-b-2 border-neutral-500" />
        ) : (
          <div
            className={cn(
              "w-full h-full border border-neutral-200 shadow-sm bg-white",
              {
                "rounded-md": radius === "medium",
                "rounded-full": radius === "full",
              }
            )}
          />
        )}
      </div>
      <div ref={tabRef} className="flex">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={cn(
              "py-1.5 bg-transparent select-none text-sm",
              {
                "text-xs": size === "small",
                "text-sm": size === "medium",
                "text-lg": size === "large",
              },
              variant === "underlined" ? "px-2.5" : "px-4",
              tab.disabled
                ? "cursor-not-allowed text-neutral-300"
                : "cursor-pointer text-neutral-600"
            )}
            onClick={() => handleChange(tab, index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;

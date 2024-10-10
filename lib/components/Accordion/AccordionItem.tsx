import { ChevronLeftIcon } from "lucide-react";
import React, { useContext, useEffect, useRef } from "react";
import { AccordionContext } from ".";
import { cn } from "../../utils";

interface Props {
  id: string;
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<Props> = ({ id, title, children }) => {
  const { variant, openingItems, toggleItem } = useContext(AccordionContext);

  const contentRef = useRef<HTMLDivElement | null>(null);
  const contentHeight = useRef<number>(0);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        contentHeight.current = entry.contentRect.height;
      });
    });
    observer.observe(contentRef.current!);
    return () => {
      observer.disconnect();
    };
  }, []);

  const opening = openingItems.includes(id);

  return (
    <div
      className={cn("group", {
        "rounded-md shadow-sm border border-neutral-200 px-2":
          variant === "splitted",
      })}
    >
      <div className="flex py-2 cursor-pointer" onClick={() => toggleItem(id)}>
        <div className="flex-1 flex mr-2 text-lg font-medium">{title}</div>
        <ChevronLeftIcon
          className={cn(
            "w-6 h-6 text-neutral-700 flex-shrink-0 transform duration-150",
            { "-rotate-90": opening },
          )}
        />
      </div>
      <div
        className={cn(
          "py-0 overflow-hidden transform transition-all duration-300 opacity-0",
          { "py-2 opacity-100": opening },
        )}
        style={{
          height: opening ? `${contentHeight.current + 16}px` : 0,
        }}
      >
        {children}
      </div>
      <div className="h-0">
        <div ref={contentRef} className="py-2 invisible">
          {children}
        </div>
      </div>
      <div
        className={cn(
          "h-[1px] bg-neutral-200 w-full group-last-of-type:hidden",
          { hidden: variant === "splitted" },
        )}
      />
    </div>
  );
};

export default AccordionItem;

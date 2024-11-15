import { CheckIcon } from "lucide-react";
import React, { Fragment, useEffect, useRef, useState } from "react";
import useClickAway from "../../hooks/useClickAway";
import { cn } from "../../utils";
import type { ItemType } from "./types";

interface Props {
  items: ItemType[];
  children: React.ReactNode;
}

const ContextMenu: React.FC<Props> = ({ items: initialItems, children }) => {
  const [items, setItems] = useState<ItemType[]>(initialItems);
  const [opening, setOpening] = useState<boolean>(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuSize = useRef<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  useClickAway(menuRef, () => setOpening(false));

  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        menuSize.current = {
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        };
      });
    });
    observer.observe(menuRef.current!);
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleClick = (item: ItemType) => {
    if (item.type === "action") {
      item.onClick();
      setOpening(false);
    } else if (item.type === "radio") {
      const newItems = items.map((i) => {
        if (i.type === "radio" && i.name === item.name) {
          return { ...i, selected: i.label === item.label };
        }
        return i;
      });
      setItems(newItems);
      item.onSelect();
      setOpening(false);
    } else if (item.type === "checkbox") {
      const newItems = items.map((i) => {
        if (i.type === "checkbox" && i.label === item.label) {
          return { ...i, checked: !i.checked };
        }
        return i;
      });
      setItems(newItems);
      item.onChange(!item.checked);
      setOpening(false);
    }
  };

  const handleRightClickMouse = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const left = wrapperRef.current!.getBoundingClientRect().left;
    const top = wrapperRef.current!.getBoundingClientRect().top;

    const right = window.innerWidth - e.clientX;
    const bottom = window.innerHeight - e.clientY;

    const extra = 30;
    const extraLeft =
      right < menuSize.current.width + extra
        ? menuSize.current.width + extra - right
        : 0;
    const extraTop =
      bottom < menuSize.current.height + extra
        ? menuSize.current.height + extra - bottom
        : 0;

    menuRef.current!.style.left = `${e.clientX - left - extraLeft}px`;
    menuRef.current!.style.top = `${e.clientY - top - extraTop}px`;
    setOpening(true);
  };

  return (
    <div className="relative">
      <div ref={wrapperRef} onContextMenu={handleRightClickMouse}>
        {children}
      </div>
      <div
        ref={menuRef}
        className={cn(
          "absolute rounded-md border border-neutral-200 shadow-sm py-1 bg-white min-w-60 max-w-72",
          { invisible: !opening },
        )}
      >
        {items.map((item, index) => (
          <Fragment key={index}>
            {item.type === "divider" ? (
              <div className="h-[1px] bg-neutral-200 my-1" />
            ) : item.type === "label" ? (
              <div className="py-1 px-2 mx-1 rounded-md flex items-center">
                <div className="w-4 h-full flex justify-center items-center mr-2"></div>
                <div className="flex-auto font-bold text-md">{item.label}</div>
              </div>
            ) : (
              <div
                className={cn("py-1 px-2 mx-1 rounded-md flex items-center", {
                  "hover:bg-neutral-100 cursor-pointer": !item.disabled,
                })}
                onClick={() => !item.disabled && handleClick(item)}
              >
                <div className="w-4 h-full flex justify-center items-center mr-2">
                  {item.type === "checkbox" && item.checked && (
                    <CheckIcon
                      width={16}
                      height={16}
                      className={
                        item.disabled ? "text-neutral-300" : "text-neutral-700"
                      }
                    />
                  )}
                  {item.type === "radio" && item.selected && (
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full",
                        item.disabled ? "bg-neutral-300" : "bg-neutral-700",
                      )}
                    />
                  )}
                  {item.type === "action" && item.icon && (
                    <span
                      className={
                        item.disabled ? "text-neutral-300" : "text-neutral-700"
                      }
                    >
                      {item.icon}
                    </span>
                  )}
                </div>
                <div
                  className={cn(
                    "flex-auto font-medium text-sm",
                    item.disabled ? "text-neutral-300" : "text-neutral-700",
                  )}
                >
                  {item.label}
                </div>
                {item.subLabel && (
                  <div
                    className={cn(
                      "text-xs",
                      item.disabled ? "text-neutral-300" : "text-neutral-400",
                    )}
                  >
                    {item.subLabel}
                  </div>
                )}
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ContextMenu;

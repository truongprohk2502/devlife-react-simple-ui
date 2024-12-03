import { GripIcon } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { cn } from "../../utils";

interface DataType {
  id: string;
  [key: string]: any;
}

interface Props {
  className?: string;
  data: DataType[];
  renderItem: (item: DataType) => React.ReactNode;
  onChange?: (orderedIds: string[]) => void;
}

const SortableList: React.FC<Props> = ({
  data,
  className,
  renderItem,
  onChange,
}) => {
  const sortableListRef = useRef<HTMLUListElement>(null);
  const orderedIds = useRef<string[]>(data.map((item) => item.id));

  useEffect(() => {
    const sortableList = sortableListRef.current!;
    const items = sortableList.querySelectorAll("li");

    const handleDragStart = (item: HTMLLIElement) => {
      setTimeout(() => {
        item.classList.add("dragging");
        const child = item.querySelector("div")!;
        child.style.opacity = "0";
      }, 0);
    };

    const handleDragEnd = (item: HTMLLIElement) => {
      item.classList.remove("dragging");
      const child = item.querySelector("div")!;
      child.style.opacity = "1";
    };

    items.forEach((item) => {
      item.ondragstart = () => handleDragStart(item);
      item.ondragend = () => handleDragEnd(item);
    });

    return () => {
      items.forEach((item) => {
        item.ondragstart = null;
        item.ondragend = null;
      });
    };
  }, []);

  useEffect(() => {
    const sortableList = sortableListRef.current!;

    const initSortableList = (e: DragEvent) => {
      e.preventDefault();

      const listItems = Array.from(sortableList.querySelectorAll("li"));
      const orderedList = listItems
        .map((item) => {
          const id = item.getAttribute("data-id") as string;
          return id;
        })
        .filter((item) => item !== undefined);

      const draggingItem = sortableList.querySelector(".dragging");

      if (!draggingItem) return;

      const siblings = Array.from(
        sortableList.querySelectorAll("li:not(.dragging)")
      );

      const nextSibling = siblings.find((sibling) => {
        const rect = sibling.getBoundingClientRect();
        return e.clientY <= rect.top + rect.height / 2;
      });

      sortableList.insertBefore(draggingItem, nextSibling || null);

      if (orderedIds.current.join(",") !== orderedList.join(",")) {
        orderedIds.current = orderedList;
        onChange?.(orderedList);
      }
    };

    const preventDragEnter = (e: DragEvent) => {
      e.preventDefault();
    };

    sortableList.addEventListener("dragover", initSortableList);
    sortableList.addEventListener("dragenter", preventDragEnter);

    return () => {
      sortableList.removeEventListener("dragover", initSortableList);
      sortableList.removeEventListener("dragenter", preventDragEnter);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul
      ref={sortableListRef}
      className={cn(
        "rounded-md bg-white border border-neutral-300 px-4 py-5 grid grid-cols-1 gap-3",
        className
      )}
    >
      {data.map((item) => (
        <li
          key={item.id}
          data-id={item.id}
          draggable
          className="list-none flex justify-between items-center cursor-move bg-white rounded-md px-3 py-2 border border-neutral-300"
        >
          <div className="flex items-center w-full">
            <div className="flex-auto mr-2">{renderItem(item)}</div>
            <GripIcon width={16} height={16} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SortableList;

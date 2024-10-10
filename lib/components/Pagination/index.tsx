import React from "react";
import { ChevronLeftIcon, EllipsisIcon } from "lucide-react";
import { cn } from "../../utils";

interface Props {
  total: number;
  current: number;
  siblings?: number;
  showControls?: boolean;
  variant?: "solid" | "separated" | "outline";
  className?: string;
  onChange: (val: number) => void;
}

const Pagination: React.FC<Props> = ({
  total,
  current,
  siblings = 1,
  variant = "solid",
  showControls,
  className,
  onChange,
}) => {
  const getCells = () => {
    const visiblePages = siblings * 2 + 1;

    const paginationList: Array<string | number> = [];

    if (showControls) paginationList.push("<");

    if (total < visiblePages) {
      Array(total).forEach((_, index) => paginationList.push(index + 1));
    } else {
      let start = Math.max(1, current - siblings);
      let end = Math.min(total, current + siblings);

      if (current <= siblings + 1) end = visiblePages;

      if (current >= total - siblings) start = total - visiblePages + 1;

      if (start > 1) paginationList.push(1);
      if (start > 2) paginationList.push("...");

      for (let i = start; i <= end; i++) paginationList.push(i);

      if (end < total - 1) paginationList.push("...");
      if (end < total) paginationList.push(total);
    }

    if (showControls) paginationList.push(">");

    return paginationList;
  };

  const onPrev = () => {
    if (current <= 1) return;
    onChange(current - 1);
  };

  const onNext = () => {
    if (current >= total) return;
    onChange(current + 1);
  };

  const handleClick = (item: string | number) => {
    if (typeof item === "number") {
      onChange(item);
    } else if (item === "<") {
      onPrev();
    } else if (item === ">") {
      onNext();
    }
  };

  return (
    <div
      className={cn(
        "flex h-10 w-fit",
        {
          "rounded-lg bg-neutral-100": variant === "solid",
          "gap-2": variant === "separated",
        },
        className
      )}
    >
      {getCells().map((item, index) => (
        <div
          key={index}
          className={cn(
            "px-1 min-w-10 flex justify-center items-center",
            { "cursor-pointer": item !== "..." },
            {
              "border-l-[1px] border-neutral-200":
                variant === "solid" &&
                index !== 0 &&
                item !== current &&
                item !== current + 1,
            },
            {
              "bg-blue-500 text-white rounded-lg": item === current,
              "bg-neutral-100 text-black rounded-lg":
                variant === "separated" && item !== current,
            }
          )}
          onClick={() => handleClick(item)}
        >
          {typeof item === "number" ? (
            <span className="select-none font-medium">{item}</span>
          ) : item === "<" ? (
            <ChevronLeftIcon
              className={cn("w-4 h-4", {
                "text-neutral-300": current <= 1,
              })}
            />
          ) : item === ">" ? (
            <ChevronLeftIcon
              className={cn("w-4 h-4 rotate-180", {
                "text-neutral-300": current >= total,
              })}
            />
          ) : (
            <EllipsisIcon className="w-3 h-3" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Pagination;

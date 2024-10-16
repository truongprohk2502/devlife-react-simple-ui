import { cva, VariantProps } from "class-variance-authority";
import orderBy from "lodash/orderBy";
import {
  ChevronDownIcon,
  ChevronsUpDownIcon,
  ChevronUpIcon,
} from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import ScrollArea from "./ScrollArea";
import Checkbox from "./Checkbox";
import { cn } from "../../utils";

const colorVariants = cva("", {
  variants: {
    color: {
      primary: "bg-blue-100 text-blue-700",
      secondary: "bg-gray-200 text-gray-700",
      success: "bg-green-100 text-green-700",
      danger: "bg-red-100 text-red-700",
      warning: "bg-yellow-100 text-yellow-700",
      info: "bg-cyan-100 text-cyan-700",
      dark: "bg-neutral-700 text-white",
    },
  },
});

type ColorVariant = VariantProps<typeof colorVariants>;

interface TableColumn {
  key: string;
  label: string;
  width?: string | number;
  sorter?: boolean;
}

interface TableData {
  [key: string]: React.ReactNode;
}

type SelectionProps =
  | {
      selectionMode?: "single" | "multiple";
      selections: string[];
      onChangeSelections: (selections: string[]) => void;
    }
  | {
      selectionMode?: "none";
      selections?: string[];
      onChangeSelections?: (selections: string[]) => void;
    };

type Props = {
  keyField: string;
  header: TableColumn[];
  data: TableData[];
  stickyHeader?: boolean;
  isStriped?: boolean;
  variant?: "outline" | "underline" | "bordered";
  color?: ColorVariant["color"];
  className?: string;
} & SelectionProps;

const Table: React.FC<Props> = ({
  keyField,
  header,
  data,
  stickyHeader,
  isStriped,
  variant = "outline",
  selectionMode = "none",
  color = "primary",
  className,
  selections = [],
  onChangeSelections = () => {},
}) => {
  const [sortKey, setSortKey] = useState<{
    [key: string]: "asc" | "desc" | "none";
  }>({});

  const sortedData = useMemo(() => {
    const sortedKey = Object.keys(sortKey).reduce(
      (acc: { [key: string]: "asc" | "desc" }, key) => {
        if (sortKey[key] !== "none") acc[key] = sortKey[key];
        return acc;
      },
      {}
    );

    return Object.keys(sortedKey).length
      ? orderBy(data, Object.keys(sortedKey), Object.values(sortedKey))
      : data;
  }, [data, sortKey]);

  useEffect(() => {
    const sortKey: { [key: string]: "asc" | "desc" | "none" } = {};
    header.forEach((item) => {
      if (item.sorter) sortKey[item.key] = "none";
    });
    setSortKey(sortKey);
  }, [header]);

  const handleClickRow = (key: string) => {
    if (selectionMode === "none") return;

    if (selectionMode === "single") {
      onChangeSelections([key]);
    } else {
      if (selections.includes(key)) {
        onChangeSelections(selections.filter((item) => item !== key));
      } else {
        onChangeSelections([...selections, key]);
      }
    }
  };

  const handleClickAll = () => {
    if (selections.length === data.length) onChangeSelections([]);
    else onChangeSelections(data.map((item) => item[keyField] as string));
  };

  const handleSort = (key: string) => {
    if (sortKey[key] === "none") {
      setSortKey({ ...sortKey, [key]: "asc" });
    } else if (sortKey[key] === "asc") {
      setSortKey({ ...sortKey, [key]: "desc" });
    } else {
      setSortKey({ ...sortKey, [key]: "none" });
    }
  };

  return (
    <ScrollArea
      className={cn(
        "rounded-md",
        {
          "border border-neutral-100": variant === "bordered",
        },
        className
      )}
    >
      <table className="w-full">
        <thead>
          <tr
            className={cn("bg-neutral-100 text-neutral-500", {
              "sticky top-0": stickyHeader,
            })}
          >
            {selectionMode === "multiple" && (
              <th>
                <Checkbox
                  color={color}
                  type={
                    selections.length === data.length
                      ? "checked"
                      : selections.length
                      ? "indeterminate"
                      : "unchecked"
                  }
                  onClick={handleClickAll}
                />
              </th>
            )}
            {header.map((column) => (
              <th
                key={column.key}
                style={{ width: column.width || "auto" }}
                className={cn(
                  "text-left px-3 py-2 group",
                  variant === "bordered"
                    ? "first:rounded-tl-md last:rounded-tr-md"
                    : "first:rounded-l-md last:rounded-r-md",
                  { "cursor-pointer": column.sorter }
                )}
                onClick={() => column.sorter && handleSort(column.key)}
              >
                <div className="flex items-center gap-2">
                  <span className="select-none">{column.label}</span>
                  {column.sorter && (
                    <span className="ml-1 text-neutral-500 invisible group-hover:visible">
                      {sortKey[column.key] === "asc" ? (
                        <ChevronDownIcon className="w-4 h-4" />
                      ) : sortKey[column.key] === "desc" ? (
                        <ChevronUpIcon className="w-4 h-4" />
                      ) : (
                        <ChevronsUpDownIcon className="w-4 h-4" />
                      )}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="before:leading-[0.5rem] before:content-['\200C'] before:block text-sm text-neutral-600">
          {sortedData.map((item, index) => (
            <tr
              key={item[keyField] as string}
              className={cn(
                {
                  "[&:not(:last-child)]:border-b border-neutral-100":
                    variant !== "outline",
                  "bg-neutral-50 rounded-md": isStriped && index % 2 === 1,
                },
                selectionMode !== "none" && [
                  "cursor-default",
                  selections.includes(item[keyField] as string)
                    ? colorVariants({ color })
                    : "hover:bg-neutral-100",
                ]
              )}
              onClick={() => handleClickRow(item[keyField] as string)}
            >
              {selectionMode === "multiple" && (
                <th>
                  <Checkbox
                    color={color}
                    type={
                      selections.includes(item[keyField] as string)
                        ? "checked"
                        : "unchecked"
                    }
                  />
                </th>
              )}
              {header.map((column) => (
                <td
                  key={column.key}
                  className={cn("text-left px-3 py-2", {
                    "first:rounded-l-md last:rounded-r-md":
                      variant === "outline" && selectionMode !== "multiple",
                  })}
                >
                  {item[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </ScrollArea>
  );
};

export default Table;

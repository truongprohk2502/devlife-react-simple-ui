import React from "react";
import {
  AlignJustifyIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CircleUserRoundIcon,
  DownloadIcon,
  RotateCwIcon,
  SearchIcon,
  XIcon,
} from "lucide-react";
import { cn } from "../../utils";

interface Props {
  variant?: "compact" | "full";
  href: string;
  title?: string;
  hasButtonColor?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const BrowserMockup: React.FC<Props> = ({
  variant = "compact",
  href,
  title = "Website title",
  hasButtonColor,
  className,
  children,
}) => {
  return (
    <div className="rounded-lg border border-neutral-300 overflow-hidden min-w-96">
      <div
        className={cn("flex items-stretch", {
          "bg-neutral-200 py-3": variant === "compact",
          "bg-neutral-200 pt-2": variant === "full",
        })}
      >
        <div
          className={cn("flex items-center gap-2 flex-shrink-0 pl-6", {
            "border-b border-neutral-300": variant === "full",
          })}
        >
          <div
            className={cn(
              "w-3 h-3 rounded-full",
              hasButtonColor ? "bg-red-500" : "bg-neutral-400"
            )}
          />
          <div
            className={cn(
              "w-3 h-3 rounded-full",
              hasButtonColor ? "bg-yellow-500" : "bg-neutral-400"
            )}
          />
          <div
            className={cn(
              "w-3 h-3 rounded-full",
              hasButtonColor ? "bg-green-500" : "bg-neutral-400"
            )}
          />
        </div>
        {variant === "compact" ? (
          <div className="flex-1 flex justify-center px-8">
            <div className="w-full py-1 px-2 rounded-lg bg-neutral-50 text-neutral-700 flex items-center flex-nowrap">
              <SearchIcon className="w-4 h-4 flex-shrink-0 mr-2" />
              <p className="text-neutral-500 text-sm flex-1 whitespace-nowrap overflow-hidden text-ellipsis">
                {href}
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="w-6 h-3 mt-auto bg-neutral-50 translate-x-[1px]">
              <div className="w-full h-full border-r border-b border-neutral-300 rounded-br-lg bg-neutral-200" />
            </div>
            <div className="rounded-t-lg border-x border-t border-neutral-300 bg-neutral-50 px-4 w-52 h-9 flex items-center">
              <div className="flex-1 whitespace-nowrap overflow-hidden text-neutral-500 text-sm relative">
                {title}
                <div className="absolute inset-y-0 right-0 w-10 bg-[linear-gradient(to_right,rgba(255,255,255,0),rgba(255,255,255,1))]" />
              </div>
              <div className="w-3 h-3 flex justify-center items-center bg-neutral-400 rounded-full">
                <XIcon className="w-2.5 h-2.5 text-white" />
              </div>
            </div>
            <div className="flex-1 h-3 mt-auto bg-neutral-50 -translate-x-[1px]">
              <div className="w-full h-full border-l border-b border-neutral-300 rounded-bl-lg bg-neutral-200" />
            </div>
          </>
        )}
      </div>
      {variant === "full" && (
        <div className="bg-neutral-50 py-2 px-4 flex-grow-0 flex-shrink-0 w-full flex-1 flex items-center gap-4">
          <div className="flex gap-2 text-neutral-500 flex-shrink-0">
            <ArrowLeftIcon className="w-4 h-4" />
            <ArrowRightIcon className="w-4 h-4" />
            <RotateCwIcon className="w-4 h-4" />
          </div>
          <div className="flex-1 px-3 py-2 bg-white border border-neutral-300 rounded-lg text-neutral-500 text-sm w-full whitespace-nowrap overflow-hidden text-ellipsis">
            {href}
          </div>
          <div className="flex gap-2 text-neutral-500 flex-shrink-0">
            <DownloadIcon className="w-4 h-4" />
            <CircleUserRoundIcon className="w-4 h-4" />
            <AlignJustifyIcon className="w-4 h-4" />
          </div>
        </div>
      )}
      <div
        className={cn(
          "min-h-32 bg-neutral-100 border-t border-neutral-300",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default BrowserMockup;

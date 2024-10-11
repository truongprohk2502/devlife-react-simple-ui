import * as Portal from "@radix-ui/react-portal";
import { XIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "../../utils";

interface Props {
  open: boolean;
  position?: "right" | "left";
  disabledHeaderClose?: boolean;
  overlayCancel?: boolean;
  title?: string;
  hasFooterCancel?: boolean;
  hasFooterConfirm?: boolean;
  confirmTitle?: string;
  children: React.ReactNode;
  onConfirm?: () => void;
  onClose: () => void;
}

const Drawer: React.FC<Props> = ({
  open,
  position = "right",
  disabledHeaderClose,
  overlayCancel,
  title,
  hasFooterCancel,
  hasFooterConfirm,
  confirmTitle,
  children,
  onConfirm,
  onClose,
}) => {
  const [rendering, setRendering] = useState<boolean>(open);

  useEffect(() => {
    if (open) {
      setRendering(true);
    }
  }, [open]);

  const handleAnimationEnd = () => {
    if (!open) setRendering(false);
  };

  return (
    <Portal.Root>
      <div
        className={cn("z-20 fixed inset-0", {
          invisible: !rendering,
        })}
      >
        <div
          className={cn(
            "absolute inset-0 bg-[rgba(0,0,0,0.5)] fill-mode-forwards",
            open ? "animate-opacity-up" : "animate-opacity-down"
          )}
          onClick={() => overlayCancel && onClose()}
        />
        <div
          className={cn(
            "absolute inset-y-0 w-96 shadow-md bg-white z-10 fill-mode-forwards overflow-auto flex flex-col",
            {
              "right-0": position === "right",
              "left-0": position === "left",
            },
            {
              "animate-shift-right-in": open && position === "right",
              "animate-shift-right-out": !open && position === "right",
              "animate-shift-left-in": open && position === "left",
              "animate-shift-left-out": !open && position === "left",
            }
          )}
          onAnimationEnd={handleAnimationEnd}
        >
          {(title || !disabledHeaderClose) && (
            <div className="h-12 bg-white border-b border-neutral-200 flex justify-between items-center px-2">
              <h3 className="text-ellipsis line-clamp-1 font-semibold">
                {title}
              </h3>
              {!disabledHeaderClose && (
                <XIcon
                  className="w-6 h-6 text-neutral-700 cursor-pointer"
                  onClick={onClose}
                />
              )}
            </div>
          )}
          <div className="overflow-auto flex-1">{children}</div>
          {(hasFooterConfirm || hasFooterCancel) && (
            <div className="px-4 py-3 flex gap-3 justify-end sticky bottom-0 bg-white border-t border-neutral-200">
              {hasFooterCancel && (
                <button
                  className="focus:outline-none border-none bg-neutral-200 text-neutral-600 rounded-md px-4 py-2 text-sm"
                  onClick={onClose}
                >
                  Cancel
                </button>
              )}
              {hasFooterConfirm && (
                <button
                  className="focus:outline-none border-none bg-neutral-800 text-white rounded-md px-4 py-2 text-sm"
                  onClick={onConfirm}
                >
                  {confirmTitle || "Confirm"}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </Portal.Root>
  );
};

export default Drawer;

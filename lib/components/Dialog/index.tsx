import * as Portal from "@radix-ui/react-portal";
import { XIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "../../utils";

interface Props {
  open: boolean;
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

const Dialog: React.FC<Props> = ({
  open,
  title,
  disabledHeaderClose,
  overlayCancel,
  hasFooterCancel,
  hasFooterConfirm,
  confirmTitle = "Confirm",
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
        className={cn("z-20 fixed inset-0 flex justify-center items-center", {
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
            "rounded-md shadow-md bg-white min-w-96 min-h-40 z-10 fill-mode-forwards",
            open ? "animate-scale-up" : "animate-scale-down"
          )}
          onAnimationEnd={handleAnimationEnd}
        >
          {(title || !disabledHeaderClose) && (
            <div
              className={cn("px-6 py-4 rounded-t-md flex items-center", {
                "justify-between": title && !disabledHeaderClose,
                "justify-end": !title && !disabledHeaderClose,
              })}
            >
              {title && <p className="font-semibold text-xl">{title}</p>}
              {!disabledHeaderClose && (
                <XIcon
                  className="w-6 h-6 text-neutral-700 cursor-pointer"
                  onClick={onClose}
                />
              )}
            </div>
          )}
          <div className="px-6 py-4">{children}</div>
          {(hasFooterConfirm || hasFooterCancel) && (
            <div className="px-6 py-4 flex gap-3 justify-end">
              {hasFooterCancel && (
                <button
                  className="focus:outline-none border-none bg-neutral-200 text-neutral-600 rounded-sm px-4 py-2 text-sm"
                  onClick={onClose}
                >
                  Cancel
                </button>
              )}
              {hasFooterConfirm && (
                <button
                  className="focus:outline-none border-none bg-neutral-800 text-white rounded-sm px-4 py-2 text-sm"
                  onClick={onConfirm}
                >
                  {confirmTitle}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </Portal.Root>
  );
};

export default Dialog;

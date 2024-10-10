import * as Portal from "@radix-ui/react-portal";
import type { VariantProps } from "class-variance-authority";
import {
  CircleAlert,
  CircleCheckBig,
  CircleX,
  TriangleAlert,
} from "lucide-react";
import React, { useCallback } from "react";
import { useToast } from "./useToast";
import { cn } from "../../utils";
import { toastVariants } from "./helpers";

type ToastProps = VariantProps<typeof toastVariants>;
export type ToastPosition = ToastProps["position"];

const Toast: React.FC<ToastProps> = ({ position }) => {
  const { data, clearToast } = useToast();

  const refCallback = useCallback((el: HTMLDivElement | null) => {
    if (!el) return;

    setTimeout(() => {
      el.classList.add("animate-toast-out");
    }, 3000);
  }, []);

  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === "toast-out") clearToast();
  };

  return (
    <Portal.Root>
      {data && (
        <div
          key={data.id}
          ref={refCallback}
          className={cn(toastVariants({ position }), {
            "bg-green-600 text-white": data.type === "success",
            "bg-red-600 text-white": data.type === "error",
            "bg-yellow-600 text-white": data.type === "warning",
            "bg-cyan-600 text-white": data.type === "info",
          })}
          onAnimationEnd={handleAnimationEnd}
        >
          {data.type === "success" ? (
            <CircleCheckBig className="w-6 h-6" />
          ) : data.type === "error" ? (
            <CircleX className="w-6 h-6" />
          ) : data.type === "warning" ? (
            <TriangleAlert className="w-6 h-6" />
          ) : data.type === "info" ? (
            <CircleAlert className="w-6 h-6" />
          ) : null}
          <p className="ml-4 mt-[2px]">{data.message}</p>
        </div>
      )}
    </Portal.Root>
  );
};

export default Toast;

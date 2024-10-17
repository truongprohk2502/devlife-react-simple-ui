import React from "react";
import { ChevronLeftIcon, MenuIcon, SquircleIcon } from "lucide-react";
import { cn } from "../../utils";

interface Props {
  showBackground?: boolean;
  size?: "small" | "medium" | "large";
  edgeSize?: "small" | "large";
  edgeRounded?: "small" | "large" | "none";
  topVariant?:
    | "pill"
    | "small_ears"
    | "large_ears"
    | "one_dot_center"
    | "two_dot_center"
    | "one_dot_left"
    | "drop_of_water"
    | "invisible";
  bottomVariants?: "home_bar" | "navigate_shape" | "navigate_icon" | "none";
  className?: string;
  children?: React.ReactNode;
}

const MobileMockup: React.FC<Props> = ({
  showBackground,
  size = "medium",
  edgeSize = "small",
  edgeRounded = "small",
  topVariant = "invisible",
  bottomVariants = "none",
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "relative w-[36em] h-[78em] bg-neutral-50",
        {
          "shadow-[0em_0em_0em_0.9em_#1f1f1f,_0em_0em_0em_1.1em_#191919,_0em_0em_0em_1.4em_#111]":
            edgeSize === "small",
          "shadow-[0em_0em_0em_1.1em_#1f1f1f,_0em_0em_0em_1.3em_#191919,_0em_0em_0em_2em_#111]":
            edgeSize === "large",
        },
        {
          "rounded-[3em]": edgeRounded === "small",
          "rounded-[4em]": edgeRounded === "large",
        },
        {
          "text-[8px]": size === "small",
          "text-[9px]": size === "medium",
          "text-[10px]": size === "large",
        },
        {
          "bg-[linear-gradient(60deg,#7371ee_1%,#a1d9d6_100%)]": showBackground,
        }
      )}
    >
      <div
        className={cn(
          "absolute inset-0 flex justify-center items-center",
          className
        )}
      >
        {children}
      </div>
      {bottomVariants === "home_bar" ? (
        <div
          id="home_indicator"
          className={cn(
            "absolute left-1/2 -translate-x-1/2 bottom-[0.7em] w-[14em] h-[0.4em] rounded-[1em]",
            showBackground ? "bg-neutral-200" : "bg-neutral-500"
          )}
        />
      ) : bottomVariants === "navigate_shape" ? (
        <div className="absolute bottom-[1.5em] inset-x-0 flex items-center justify-evenly">
          <div
            className={cn(
              "w-[1.6em] h-[1.6em] rounded-[0.3em]",
              showBackground ? "bg-neutral-200" : "bg-neutral-500"
            )}
          />
          <div
            className={cn(
              "w-[1.6em] h-[1.6em] rounded-full",
              showBackground ? "bg-neutral-200" : "bg-neutral-500"
            )}
          />
          <div
            className={cn(
              "w-0 h-0 border-y-[0.8em] border-r-[1.6em] border-y-transparent",
              showBackground ? "border-r-neutral-200" : "border-r-neutral-500"
            )}
          />
        </div>
      ) : bottomVariants === "navigate_icon" ? (
        <div className="absolute bottom-[1.5em] inset-x-0 flex items-center justify-evenly">
          <MenuIcon
            className={cn(
              "w-[1.6em] h-[1.6em]",
              showBackground ? "text-neutral-200" : "text-neutral-500"
            )}
          />
          <SquircleIcon
            className={cn(
              "w-[1.6em] h-[1.6em]",
              showBackground ? "text-neutral-200" : "text-neutral-500"
            )}
          />
          <ChevronLeftIcon
            className={cn(
              "w-[1.6em] h-[1.6em]",
              showBackground ? "text-neutral-200" : "text-neutral-500"
            )}
          />
        </div>
      ) : null}
      {topVariant !== "invisible" && (
        <div
          id="front_top_frame"
          className={cn("absolute left-1/2 -translate-x-1/2 bg-[#1f1f1f]", {
            "w-[56%] h-[3em] rounded-b-[4em] top-0":
              topVariant === "large_ears",
            "w-[40%] h-[3em] rounded-b-[2em] top-0":
              topVariant === "small_ears",
            "w-[30%] h-[3em] rounded-[2em] top-[0.8em]": topVariant === "pill",
            "w-[3em] h-[2em] top-0 rounded-b-full":
              topVariant === "drop_of_water",
          })}
        />
      )}
      {(topVariant === "small_ears" || topVariant === "large_ears") && (
        <div
          id="speaker"
          className={cn(
            "absolute left-1/2 top-0 -translate-x-1/2 translate-y-[0.6em] h-[0.8em] w-[15%] bg-[#101010] rounded-[0.8em] shadow-[inset_0em_-0.3em_0.3em_0em_rgba(256,256,256,0.2)]"
          )}
        />
      )}
      {topVariant !== "invisible" && (
        <>
          <div
            id="camera"
            className={cn(
              "absolute bg-[#101010] rounded-[1.2em] shadow-[inset_0em_-0.3em_0.2em_0em_rgba(256,256,256,0.2)]",
              "flex justify-center items-center",
              {
                "translate-y-[0.4em]": topVariant !== "drop_of_water",
              },
              {
                "left-1/2 w-[1.2em] h-[1.2em] top-0 translate-x-[4em]":
                  topVariant === "small_ears" || topVariant === "large_ears",
                "left-1/2 w-[1.2em] h-[1.2em] top-[1.3em] translate-x-[3em]":
                  topVariant === "pill",
                "left-1/2 w-[1.6em] h-[1.6em] top-[0.4em] -translate-x-1/2":
                  topVariant === "one_dot_center",
                "left-1/2 w-[1.6em] h-[1.6em] top-[0.4em] translate-x-[0.2em]":
                  topVariant === "two_dot_center",
                "left-[1.8em] w-[1.6em] h-[1.6em] top-[0.8em]":
                  topVariant === "one_dot_left",
                "left-1/2 w-[1.6em] h-[1.6em] top-0 -translate-x-1/2":
                  topVariant === "drop_of_water",
              }
            )}
          >
            <div
              className={cn(
                "bg-[#2d4d76] rounded-full shadow-[inset_0em_-0.2em_0.2em_rgba(0,0,0,0.5)]",
                topVariant === "one_dot_center"
                  ? "w-[0.8em] h-[0.8em]"
                  : "w-[0.6em] h-[0.6em]"
              )}
            />
          </div>
          {topVariant === "two_dot_center" && (
            <div
              id="sub_camera"
              className={cn(
                "absolute top-0 translate-y-[0.4em] bg-[#101010] rounded-[1.2em] shadow-[inset_0em_-0.3em_0.2em_0em_rgba(256,256,256,0.2)]",
                "left-1/2 w-[1.6em] h-[1.6em] top-[0.4em] -translate-x-[1.8em]",
                "flex justify-center items-center"
              )}
            >
              <div className="bg-[#2d4d76] rounded-full shadow-[inset_0em_-0.2em_0.2em_rgba(0,0,0,0.5)] w-[0.8em] h-[0.8em]" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MobileMockup;

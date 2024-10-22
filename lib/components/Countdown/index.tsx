import React, { useEffect, useRef } from "react";
import CountdownItem, { CountdownRef } from "./CountdownItem";
import CountdownWithLabel from "./CountdownWithLabel";
import { cn } from "../../utils";

export type CountdownVariant =
  | "line_label"
  | "bottom_label"
  | "bottom_fill_label"
  | "colon_label"
  | "abbreviated_label";

export type Size = "small" | "medium" | "large";

interface Props {
  seconds: number;
  variant?: CountdownVariant;
  size?: Size;
  hasDay?: boolean;
}

const Countdown: React.FC<Props> = ({
  seconds,
  variant = "line_label",
  size = "medium",
  hasDay,
}) => {
  const secondsRef = useRef<CountdownRef>(null);
  const minutesRef = useRef<CountdownRef>(null);
  const hoursRef = useRef<CountdownRef>(null);
  const daysRef = useRef<CountdownRef>(null);

  const timeLeft = useRef<number>(seconds);

  const setTimeLeft = (number: number) => {
    timeLeft.current = number;

    const secondsPerMinute = 60;
    const secondsPerHour = secondsPerMinute * 60;
    const secondsPerDay = secondsPerHour * 24;

    const days = hasDay ? Math.floor(number / secondsPerDay) : 0;
    const hours = Math.floor((number - days * secondsPerDay) / secondsPerHour);
    const minutes = Math.floor(
      (number - days * secondsPerDay - hours * secondsPerHour) /
        secondsPerMinute
    );
    const seconds =
      number -
      days * secondsPerDay -
      hours * secondsPerHour -
      minutes * secondsPerMinute;

    daysRef.current?.setTimeLeft(days);
    hoursRef.current?.setTimeLeft(hours);
    minutesRef.current?.setTimeLeft(minutes);
    secondsRef.current?.setTimeLeft(seconds);
  };

  useEffect(() => {
    setTimeLeft(seconds);

    const interval = setInterval(() => {
      if (timeLeft.current === 0) {
        clearInterval(interval);
      } else {
        setTimeLeft(timeLeft.current - 1);
      }
    }, 1000);

    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  return (
    <div
      className={cn(
        "flex items-center",
        (variant === "bottom_label" || variant === "bottom_fill_label") && {
          "gap-1.5": size === "small",
          "gap-2.5": size === "medium",
          "gap-4": size === "large",
        }
      )}
    >
      <CountdownWithLabel
        size={size}
        variant={variant}
        type="day"
        hidden={!hasDay}
      >
        <CountdownItem
          ref={daysRef}
          size={size}
          number={Math.floor(seconds / (24 * 60 * 60))}
        />
      </CountdownWithLabel>
      <CountdownWithLabel size={size} variant={variant} type="hour">
        <CountdownItem
          ref={hoursRef}
          size={size}
          number={hasDay ? 23 : Math.floor(seconds / (60 * 60))}
        />
      </CountdownWithLabel>
      <CountdownWithLabel size={size} variant={variant} type="minute">
        <CountdownItem ref={minutesRef} size={size} number={59} />
      </CountdownWithLabel>
      <CountdownWithLabel size={size} variant={variant} type="second">
        <CountdownItem ref={secondsRef} size={size} number={59} />
      </CountdownWithLabel>
    </div>
  );
};

export default Countdown;

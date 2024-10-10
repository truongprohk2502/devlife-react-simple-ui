import dayjs from "dayjs";
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useMemo, useRef, useState } from "react";
import DateInput from "./DateInput";
import {
  checkIsSameMonth,
  getDaysOfMonthWithAdjacentDays,
  getMonth,
  getNextMonth,
  getPrevMonth,
  WEEKDAYS,
} from "./date";
import useClickAway from "../../hooks/useClickAway";
import { cn } from "../../utils";

enum PositionType {
  Top,
  Bottom,
}

interface Props {
  value: string | null;
  className?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

const DatePicker: React.FC<Props> = ({
  value,
  className,
  disabled,
  onChange,
}) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dayRef = useRef<HTMLInputElement | null>(null);
  const monthRef = useRef<HTMLInputElement | null>(null);
  const yearRef = useRef<HTMLInputElement | null>(null);

  const [currentMonth, setCurrentMonth] = useState<string>(getMonth(value));
  const [opening, setOpening] = useState<boolean>(false);
  const [position, setPosition] = useState<PositionType>(PositionType.Top);

  const days = useMemo(
    () => getDaysOfMonthWithAdjacentDays(currentMonth),
    [currentMonth]
  );

  useClickAway(dropdownRef, () => setOpening(false));

  const handleOpen = () => {
    const { bottom } = dropdownRef.current!.getBoundingClientRect();
    const distanceToBottom = window.innerHeight - bottom;
    setPosition(
      distanceToBottom > 230 ? PositionType.Bottom : PositionType.Top
    );
    setOpening(true);
  };

  const changeDate = (value: string) => {
    setCurrentMonth(getMonth(value));
    onChange(value);
  };

  const selectDay = (day: string) => {
    setOpening(false);
    changeDate(day);
  };

  const goNextMonth = () => {
    setCurrentMonth(getNextMonth(currentMonth));
  };

  const goPrevMonth = () => {
    setCurrentMonth(getPrevMonth(currentMonth));
  };

  return (
    <div ref={dropdownRef} className={cn("w-[12rem] relative", className)}>
      <div
        className={cn(
          "rounded-md border flex items-center px-4 py-2",
          {
            "border-neutral-300 text-neutral-300 cursor-not-allowed": disabled,
            "border-neutral-400 text-neutral-600 hover:border-cyan-500":
              !disabled,
          },
          { "border-cyan-500": opening }
        )}
      >
        <div className="flex items-center text-sm font-medium pr-2 flex-1 w-full overflow-hidden whitespace-nowrap text-ellipsis">
          <DateInput
            ref={dayRef}
            type="day"
            disabled={disabled}
            value={value}
            onChange={changeDate}
            onCompleted={() => monthRef.current!.focus()}
          />
          <span className="text-neutral-500">/</span>
          <DateInput
            ref={monthRef}
            type="month"
            disabled={disabled}
            value={value}
            onChange={changeDate}
            onCompleted={() => yearRef.current!.focus()}
          />
          <span className="text-neutral-500">/</span>
          <DateInput
            ref={yearRef}
            type="year"
            disabled={disabled}
            value={value}
            onChange={changeDate}
          />
        </div>
        <CalendarIcon
          className="w-4 h-4 cursor-pointer"
          onClick={() => !disabled && handleOpen()}
        />
      </div>
      <div
        className={cn(
          "absolute left-0 border bg-white border-neutral-200 rounded-md w-[18rem] pt-3 pb-4 overflow-auto z-10",
          {
            "bottom-[calc(100%+0.5rem)]": position === PositionType.Top,
            "top-[calc(100%+0.5rem)]": position === PositionType.Bottom,
          },
          { hidden: !opening }
        )}
      >
        <div className="flex items-center">
          <div className="px-2">
            <ChevronLeftIcon
              className="w-6 h-6 text-neutral-700 cursor-pointer select-none"
              onClick={goPrevMonth}
            />
          </div>
          <div className="flex-1 text-neutral-700 font-semibold text-center leading-none">
            {dayjs(currentMonth).format("MMMM YYYY")}
          </div>
          <div className="px-2">
            <ChevronRightIcon
              className="w-6 h-6 text-neutral-700 cursor-pointer select-none"
              onClick={goNextMonth}
            />
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1 px-2">
          {WEEKDAYS.map((day) => (
            <div
              key={day}
              className="text-center text-neutral-400 font-semibold text-sm mt-4 mb-4"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-x-1 gap-y-2 px-2">
          {days.map((day) => (
            <div
              key={day}
              className={cn(
                "text-sm font-semibold text-center rounded-sm py-1.5",
                day === value
                  ? "bg-blue-600 text-white cursor-default"
                  : checkIsSameMonth(currentMonth, day)
                  ? "text-neutral-700 cursor-pointer hover:bg-blue-100 hover:text-blue-400"
                  : "text-neutral-300 cursor-default"
              )}
              onClick={() =>
                checkIsSameMonth(currentMonth, day) && selectDay(day)
              }
            >
              {day.slice(-2)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DatePicker;

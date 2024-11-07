import { useCallback } from "react";
import { cn } from "../../utils";
import "./style.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

const Ripple: React.FC<Props> = ({
  color = "rgba(31,31,31,0.5)",
  children,
  className,
  ...props
}) => {
  const handleClick = useCallback(
    (event: MouseEvent) => {
      const btn = event.currentTarget as HTMLDivElement;

      const circle = document.createElement("span");
      const diameter = Math.max(btn.clientWidth, btn.clientHeight);
      const radius = diameter / 2;

      const rect = btn.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const l = x - radius;
      const t = y - radius;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${l}px`;
      circle.style.top = `${t}px`;
      circle.style.backgroundColor = color;
      circle.classList.add("ripple");

      circle.addEventListener("animationend", circle.remove);

      const ripples = btn.getElementsByClassName("ripple");

      for (const ripple of ripples) {
        btn.removeChild(ripple);
      }

      btn.appendChild(circle);
    },
    [color]
  );

  const refCallback = useCallback(
    (el: HTMLDivElement | null) => {
      if (!el) return;

      el.addEventListener("click", handleClick);
      return () => {
        el.removeEventListener("click", handleClick);
      };
    },
    [handleClick]
  );

  return (
    <div
      ref={refCallback}
      className={cn("relative overflow-hidden w-fit", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Ripple;

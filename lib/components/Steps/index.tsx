import React, { Fragment } from "react";
import Circle, { Color } from "./Circle";
import Info from "./Info";
import Line from "./Line";

interface Step {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
}

interface Props {
  current: number;
  steps: Step[];
  color?: Color;
  position?: "inline" | "break-line";
}

const Steps: React.FC<Props> = ({
  current,
  steps,
  color = "primary",
  position = "inline",
}) => {
  return (
    <div className="flex items-center">
      {position === "inline" ? (
        steps.map((step, index) => (
          <Fragment key={index}>
            {index !== 0 && (
              <Line
                color={color}
                display={current >= index + 1 ? "active" : "inactive"}
              />
            )}
            <div className="flex items-center">
              <Circle
                color={color}
                index={index}
                icon={step.icon}
                variant={
                  current === index + 1
                    ? "current"
                    : current > index + 1
                      ? "completed"
                      : "upcoming"
                }
              />
              {(step.title || step.description) && (
                <Info
                  title={step.title}
                  description={step.description}
                  className="ml-4"
                />
              )}
            </div>
          </Fragment>
        ))
      ) : (
        <div className="w-full">
          <div className="flex items-center w-full">
            <Line display="hidden" />
            {steps.map((step, index) => (
              <Fragment key={index}>
                {index !== 0 && (
                  <Line
                    color={color}
                    display={current >= index + 1 ? "active" : "inactive"}
                  />
                )}
                <Circle
                  color={color}
                  index={index}
                  icon={step.icon}
                  variant={
                    current === index + 1
                      ? "current"
                      : current > index + 1
                        ? "completed"
                        : "upcoming"
                  }
                />
              </Fragment>
            ))}
            <Line display="hidden" />
          </div>
          <div className="flex">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex-1 px-4 flex flex-col items-center"
              >
                {(step.title || step.description) && (
                  <Info
                    title={step.title}
                    description={step.description}
                    className="flex flex-col items-center mt-2"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Steps;

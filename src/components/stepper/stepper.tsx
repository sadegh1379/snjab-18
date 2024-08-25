import { FC, useEffect, useRef, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { StepperContainer } from "./stepper.style";
import { IStepperProps } from "./types";
export const Stepper: FC<IStepperProps> = ({ steps = [], activeStep }) => {
  const [current, setCurrent] = useState(activeStep);
  const [isFinish, setIsFinish] = useState(false);
  const [margins, setMargins] = useState<{
    marginLeft: number;
    marginRight: number;
  }>({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (activeStep <= steps.length) {
      setCurrent(activeStep);
      setIsFinish(false);
    } else {
      setIsFinish(true);
    }
  }, [activeStep]);

  useEffect(() => {
    if (stepRef.current[0] && stepRef.current[steps.length - 1]) {
      setMargins({
        marginLeft: stepRef.current[0]!.offsetWidth / 2,
        marginRight: stepRef.current[steps.length - 1]!.offsetWidth / 2,
      });
    }
  }, [current]);

  return (
    <>
      <StepperContainer>
        {steps.map((step, index) => (
          <div
            key={step}
            ref={(el) => (stepRef.current[index] = el)}
            className={`step ${current > index + 1 || isFinish ? "complete" : ""} ${
              current === index + 1 ? "active" : ""
            }`}
          >
            <div className="step_number">
              {current > index + 1 || isFinish ? (
                <span>
                  <FiCheckCircle size={25} />
                </span>
              ) : (
                index + 1
              )}
            </div>
            <div className="step_name">{step}</div>
          </div>
        ))}

        <div
          className="progress_bar"
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}
        >
          <div
            className="progress"
            style={{
              width: `${((current - 1) / (steps.length - 1)) * 100}%`,
            }}
          ></div>
        </div>
      </StepperContainer>
    </>
  );
};

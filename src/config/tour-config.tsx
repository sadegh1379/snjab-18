import { ProviderProps } from "@reactour/tour";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useDispatch } from "react-redux";
import { addSeenTour } from "state-manager/reducer/profile";
import { useTheme } from "styled-components";
// import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

export const tourConfig = (
  tourName: string
): Omit<ProviderProps, "steps" | "children"> => {
  const dispatch = useDispatch();
  const disableBody = (target: any) => disableBodyScroll(target);
  const enableBody = (target: any) => enableBodyScroll(target);
  const { colors } = useTheme();

  return {
    afterOpen: (e) => disableBody(e),
    beforeClose: (e) => {
      dispatch(addSeenTour(tourName));
      enableBody(e);
    },
    rtl: true,
    scrollSmooth: true,
    showDots: false,
    showCloseButton: false,
    styles: {
      popover: (base) => ({
        ...base,
        "--reactour-accent": colors.background.infoLight,
        borderRadius: 10,
        color: "#000000",
        fontSize: 14,
        textAlign: "justify",
      }),
      maskArea: (base) => ({ ...base, rx: 10 }),
      maskWrapper: (base) => ({ ...base, color: "#000000" }),
      badge: (base) => ({ ...base, left: "auto", right: "-0.8125em" }),
      controls: (base) => ({
        ...base,
        marginTop: 30,
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
      }),
      close: (base) => ({ ...base, right: "auto", left: 8, top: 8 }),
    },
    badgeContent: ({ totalSteps, currentStep }) => {
      return currentStep + 1 + "/" + totalSteps;
    },
    onClickMask: ({ setCurrentStep, currentStep, steps, setIsOpen }) => {
      if (steps) {
        if (currentStep === steps.length - 1) {
          setIsOpen(false);
        }
        setCurrentStep((s) => (s === steps.length - 1 ? 0 : s + 1));
      }
    },
    nextButton: ({
      currentStep,
      stepsLength,
      setIsOpen,
      setCurrentStep,
      steps,
    }) => {
      const last = currentStep === stepsLength - 1;
      return (
        <button
          style={{
            backgroundColor: "#6A6A6A",
            color: "#fff",
            borderRadius: 5,
            border: "none",
            fontSize: 12,
            padding: "3px 15px",
            width: "91px",
            height: "28px",
          }}
          onClick={() => {
            setIsOpen(false);
          }}
        >
          بیخیال
        </button>
      );
    },

    prevButton: ({
      currentStep,
      stepsLength,
      setIsOpen,
      setCurrentStep,
      steps,
    }) => {
      const last = currentStep === stepsLength - 1;
      return (
        <button
          style={{
            backgroundColor: last
              ? colors.background.successLight
              : colors.background.infoLight,
            color: "#fff",
            borderRadius: 5,
            fontSize: 12,
            padding: "3px 15px",
            width: "91px",
            height: "28px",
            border: "none",
          }}
          onClick={() => {
            if (last) {
              setIsOpen(false);
            } else {
              setCurrentStep((s) => (s === steps?.length! - 1 ? 0 : s + 1));
            }
          }}
        >
          {last ? (
            <span>شروع به کار !</span>
          ) : (
            <>
              <span
                style={{
                  marginLeft: "5px",
                }}
              >
                بعدی
              </span>
              <MdKeyboardDoubleArrowLeft />
            </>
          )}
        </button>
      );
    },
  };
};

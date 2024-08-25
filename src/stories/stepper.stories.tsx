import type { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "components";
import { IStepperProps } from "components/stepper/types";
import { FC } from "react";
import { Container } from "react-bootstrap";

const StepperContainer: FC<IStepperProps> = (props) => {
  return (
    <Container>
      <Stepper {...props} />
    </Container>
  );
};

const meta = {
  title: "Components/Stepper",
  component: StepperContainer,
  parameters: {
    layout: "padded",

    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#FFFFFF",
        },
        {
          name: "dark",
          value: "#212121",
        },
      ],
    },
  },

  args: {
    activeStep: 3,
    steps: ["چک لیست", "ارزیابی", "سوالات", "تست های بررسی"],
  },
} satisfies Meta<typeof Stepper>;
export default meta;

type Story = StoryObj<typeof meta>;

export const StepperUI: Story = {
  args: {},
};

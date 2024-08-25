import type { Meta, StoryObj } from "@storybook/react";
import { TimePickerInput } from "components";

const meta = {
  title: "Forms/TimePickerInput",
  component: TimePickerInput,
  parameters: {
    layout: "centered",
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
    className: "",
    containerClassName: "",
    onChange: () => {},
    disabled: false,
    value: null,
    placeholder: "",
    title: "",
  },
} satisfies Meta<typeof TimePickerInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TimePickerUI: Story = {
  args: {},
};

export const TimePickerWithTitleUI: Story = {
  args: {
    title: "عنوان",
  },
};

export const TimePickerDisabledUI: Story = {
  args: {
    disabled: true,
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { DatePickerInput } from "components";
import { DateObject } from "react-multi-date-picker";

const meta = {
  title: "Forms/DatePickerInput",
  component: DatePickerInput,
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
    format: "",
    placeholder: "",
    title: "",
  },
} satisfies Meta<typeof DatePickerInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DatePickerUI: Story = {
  args: {},
};

export const DatePickerDisabledUI: Story = {
  args: {
    disabled: true,
  },
};

export const DatePickerFormatUI: Story = {
  args: {
    value: new DateObject(),
  },
};

export const DatePickerTitleUI: Story = {
  args: {
    title: "عنوان",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { CheckBox } from "components";

const meta = {
  title: "Components/CheckBox",
  component: CheckBox,
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
    title: "",
    className: "",
    disabled: false,
    checked: false,
    onClick: () => {},
  },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckBoxUI: Story = {
  args: {
    title: "عنوان",
    checked: false,
  },
};

export const CheckBoxSelectedUI: Story = {
  args: {
    title: "عنوان",
    checked: true,
  },
};

export const CheckBoxSDisabledUI: Story = {
  args: {
    title: "عنوان",
    disabled: true,
  },
};

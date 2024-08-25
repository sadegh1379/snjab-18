import type { Meta, StoryObj } from "@storybook/react";
import { CheckBox } from "components";

const meta = {
  title: "Forms/CheckBox",
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
    className: "",
    disabled: false,
    onClick: () => {},
    checked: true,
  },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxUI: Story = {
  args: {},
};

export const CheckboxTitleUI: Story = {
  args: {
    title: "عنوان",
  },
};

export const InputDisabledUI: Story = {
  args: {
    disabled: true,
  },
};

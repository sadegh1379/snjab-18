import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "components";
import { GoSearch } from "react-icons/go";

const meta = {
  title: "Forms/Input",
  component: Input,
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
    placeholder: "",
    onChange: () => {},
    value: "",
    title: "",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputUI: Story = {
  args: {},
};

export const InputTitleUI: Story = {
  args: {
    title: "عنوان",
  },
};

export const InputDisabledUI: Story = {
  args: {
    disabled: true,
  },
};

export const InputWithIconUI: Story = {
  args: {
    icon: <GoSearch className="date_icon" size={20} />,
  },
};

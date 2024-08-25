import type { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup } from "components";

const meta = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
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
    items: [],
    value: "",
    onClick: () => {},
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonGroupUI: Story = {
  args: {
    title: "عنوان",
    items: [
      { title: "اول", value: "اول" },
      { title: "دوم", value: "دوم" },
    ],
  },
};

export const ButtonGroupSelectedUI: Story = {
  args: {
    title: "عنوان",
    items: [
      { title: "اول", value: "اول" },
      { title: "دوم", value: "دوم" },
    ],
    value: "اول",
  },
};

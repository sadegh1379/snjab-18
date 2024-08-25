import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "components";

const meta = {
  title: "Forms/Textarea",
  component: Textarea,
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
    onChange: () => {},
    value: "",
  },
} satisfies Meta<typeof Textarea>;
export default meta;

type Story = StoryObj<typeof meta>;

export const TextareaUI: Story = {
  args: {},
};
export const TextareaDisabledUI: Story = {
  args: { disabled: true },
};
export const TextareaReadOnlyUI: Story = {
  args: { readOnly: true },
};

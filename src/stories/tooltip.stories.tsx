import type { Meta, StoryObj } from "@storybook/react";
import { Button, Tooltip } from "components";
const meta = {
  title: "Components/Tooltip",
  component: Tooltip,

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
    text: "تست",
  },
} satisfies Meta<typeof Tooltip>;
export default meta;

type Story = StoryObj<typeof meta>;

export const TooltipTextUI: Story = {
  args: {
    placement: "top",
    children: "تست",
  },
};
export const TooltipButtonUI: Story = {
  args: {
    placement: "top",
    children: <Button onClick={() => ""}>تست</Button>,
  },
};

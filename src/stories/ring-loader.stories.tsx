import type { Meta, StoryObj } from "@storybook/react";
import { RingLoader } from "components";

const meta = {
  title: "Loaders/RingLoader",
  component: RingLoader,
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

  args: {},
} satisfies Meta<typeof RingLoader>;
export default meta;

type Story = StoryObj<typeof meta>;

export const RingLoaderUI: Story = {
  args: {},
};

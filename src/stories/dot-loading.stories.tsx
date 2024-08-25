import type { Meta, StoryObj } from "@storybook/react";
import { DotLoader } from "components";

const meta = {
  title: "Loaders/DotLoader",
  component: DotLoader,
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
} satisfies Meta<typeof DotLoader>;
export default meta;

type Story = StoryObj<typeof meta>;

export const DotLoaderUI: Story = {
  args: {},
};

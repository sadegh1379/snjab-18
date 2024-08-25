import type { Meta, StoryObj } from "@storybook/react";
import { PageLoader } from "components";

const meta = {
  title: "Loaders/PageLoader",
  component: PageLoader,
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
} satisfies Meta<typeof PageLoader>;
export default meta;

type Story = StoryObj<typeof meta>;

export const PageLoaderUI: Story = {
  args: {},
};

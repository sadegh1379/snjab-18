import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "components";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
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

  args: { totalPages: 100, currentPage: 10, onChange: () => {} },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PaginationUI: Story = {
  args: {},
};

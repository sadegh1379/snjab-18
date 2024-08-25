import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "components";

const meta = {
  title: "Components/Card",
  component: Card,
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

  args: { title: "اطلاعات پایه" },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardUI: Story = {
  args: {
    title: "لورم ایپسوم",
    children: (
      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است.
      </p>
    ),
  },
};


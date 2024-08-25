import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "components";
import { IBreadcrumbProps } from "components/breadcrumb/types";
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

const NavbarWithRouter: FC<IBreadcrumbProps> = (props) => {
  return (
    <BrowserRouter>
      <Breadcrumb {...props} />
    </BrowserRouter>
  );
};

const meta = {
  title: "Components/Breadcrumb",
  component: NavbarWithRouter,
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

  args: { className: "" },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BreadcrumbUI: Story = {
  args: {},
};

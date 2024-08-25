import type { Meta, StoryObj } from "@storybook/react";
import { PublicHeader } from "components";
import { IPublicHeaderProps } from "components/headers/public-header/types";
import { FC } from "react";
import { IoMdClose } from "react-icons/io";
import { BrowserRouter } from "react-router-dom";

const HeaderWithRouter: FC<IPublicHeaderProps> = (props) => {
  return (
    <BrowserRouter>
      <PublicHeader {...props} />
    </BrowserRouter>
  );
};

const meta = {
  title: "Headers/PublicHeader",
  component: HeaderWithRouter,
  decorators: (Story) => {
    return (
      <div style={{ width: "100vw" }}>
        <Story />
      </div>
    );
  },
  parameters: {
    layout: "center",
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
    icon: <IoMdClose />,
    title: "سلامت گستر شریف",
    backPath: "",
  },
} satisfies Meta<typeof PublicHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderUI: Story = {
  args: {},
};

import type { Meta, StoryObj } from "@storybook/react";
import { AuthHeader } from "components";
import { IAuthHeaderProps } from "components/headers/auth-header/types";
import { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "state-manager/store";

const AuthHeaderWithRouter: FC<IAuthHeaderProps> = (props) => {
  return (
    <BrowserRouter>
      <AuthHeader {...props} />
    </BrowserRouter>
  );
};

const meta = {
  title: "Headers/AuthHeader",
  component: AuthHeaderWithRouter,
  decorators: (Story) => {
    return (
      <Provider store={store}>
        <Story />
      </Provider>
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

  args: {},
} satisfies Meta<typeof AuthHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AuthHeaderUI: Story = {
  args: {},
};

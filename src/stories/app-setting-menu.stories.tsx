import type { Meta, StoryObj } from "@storybook/react";
import { SettingButtons } from "components";
import { ISettingButtons } from "components/settings-buttons/types";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "state-manager/store";

const SettingsButtonComponent = (props: ISettingButtons) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <SettingButtons {...props} />
      </BrowserRouter>
    </Provider>
  );
};

const meta = {
  title: "Components/SettingButtons",
  component: SettingsButtonComponent,
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
  argTypes: {
    position: {
      control: "select",
      options: ["bottom-left", "bottom-right"],
    },
    className: {
      type: "string",
    },
  },
} satisfies Meta<typeof SettingsButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SettingButtonsUI: Story = {
  args: {},
};

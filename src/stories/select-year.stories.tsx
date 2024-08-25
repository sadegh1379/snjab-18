import type { Meta, StoryObj } from "@storybook/react";
import { YearSelectSection } from "components";
import { Provider } from "react-redux";
import { store } from "state-manager/store";

const meta = {
  title: "Components/SelectYear",
  component: YearSelectSection,
  decorators: (Story) => {
    return (
      <Provider store={store}>
        <Story />
      </Provider>
    );
  },
  parameters: {
    layout: "fullScreen",
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
} satisfies Meta<typeof YearSelectSection>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SelectYearInputUI: Story = {
  args: {},
};

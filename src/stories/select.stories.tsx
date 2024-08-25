import type { Meta, StoryObj } from "@storybook/react";
import { SelectInput } from "components";

const meta = {
  title: "Forms/SelectInput",
  component: SelectInput,
  decorators: (Story) => {
    return (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    );
  },
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

  args: {
    onChange: () => {},
    disabled: false,
    placeholder: "placeholder",
    title: "نام بیمارستان",
    options: [
      { value: "1", label: "بیمارستان کیهان" },
      {
        value: "2",
        label: "بیمارستان دارابی",
      },
      {
        value: "3",
        label: "بیمارستان محب",
      },
      {
        value: "4",
        label: "بیمارستان نور",
      },
    ],
    value: { value: "1", label: "بیمارستان کیهان" },
  },
} satisfies Meta<typeof SelectInput>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SelectUI: Story = {
  args: {},
};
export const SelectDisabledUI: Story = {
  args: {disabled: true},
};

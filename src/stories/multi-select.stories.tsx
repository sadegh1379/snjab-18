import type { Meta, StoryObj } from "@storybook/react";
import { MultiSelectInput } from "components";

const meta = {
  title: "Forms/MultiSelect",
  component: MultiSelectInput,
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
    value: [{ value: "1", label: "بیمارستان فارابی" }],
  },
} satisfies Meta<typeof MultiSelectInput>;
export default meta;

type Story = StoryObj<typeof meta>;

export const MultiSelectUI: Story = {
  args: {},
};

export const MultiSelectUIIsLoading: Story = {
  args: {
    options: [],
    value: [],
    isLoading: true,
  },
};

export const MultiSelectUIIsSearchable: Story = {
  args: {
    options: [],
    value: [],
    isSearchable: false,
  },
};
export const MultiSelectUIIsDisabled: Story = {
  args: {
    options: [],
    value: [],
    disabled: true,
  },
};

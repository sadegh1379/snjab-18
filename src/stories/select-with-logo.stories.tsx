import type { Meta, StoryObj } from "@storybook/react";
import { SelectWithLogoInput } from "components";

const meta = {
  title: "Forms/SelectWithLogoInput",
  component: SelectWithLogoInput,
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
      {
        value: "1",
        label: "بیمارستان کیهان",
        logo: "https://etebarbakhshii.ir/uploads/hospital/logo/10/logo.png",
      },
      {
        value: "2",
        label: "مـرکـزتخصصـی قلب",
        logo: "https://etebarbakhshii.ir/uploads/hospital/logo/30/logo.png",
      },
      {
        value: "3",
        label: "بیمارستان فوق تخصصی رضوی مشهد",
        logo: "https://etebarbakhshii.ir/uploads/hospital/logo/65/logo.png",
      },
    ],
    value: {
      value: "1",
      label: "بیمارستان کیهان",
      logo: "https://etebarbakhshii.ir/uploads/hospital/logo/10/logo.png",
    },
  },
} satisfies Meta<typeof SelectWithLogoInput>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SelectWithLogoInputUI: Story = {
  args: {},
};

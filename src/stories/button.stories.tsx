import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "components";
import { IButtonProps } from "components/button/types";
import { FC } from "react";

const ButtonsComponent: FC<IButtonProps> = (props) => {
  return (
    <>
      <Button colorType="error" {...props} />
      <br />
      <br />

      <Button colorType="success" {...props} />
      <br />
      <br />
      <Button colorType="warning" {...props} />
      <br />
      <br />
      <Button colorType="info" {...props} />
      <br />
      <br />
      <Button colorType="info" isLoading {...props} />
      <br />
      <br />
      <Button colorType="info" disabled {...props}>
        غیر فعال
      </Button>
      <br />
      <br />
    </>
  );
};

const meta = {
  title: "Components/Button",
  component: ButtonsComponent,
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
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    isLoading: {
      control: { type: "boolean" },
    },
    variant: {
      options: ["primary", "outlined"],
      control: { type: "radio" },
    },
    className: {
      control: { type: "text" },
    },
    colorType: {
      options: ["error", "info", "success", "warning"],
      control: { type: "radio" },
    },
  },
  args: { children: "ارسال پیام", onClick: () => {} },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonUI: Story = {
  args: {
    size: "medium",
    variant: "outlined",
  },
};

export const ButtonUI_isLoading: Story = {
  args: {
    size: "medium",
    variant: "outlined",
    isLoading: true,
  },
};

export const ButtonUI_disabled: Story = {
  args: {
    size: "medium",
    variant: "outlined",
    disabled: true,
  },
};

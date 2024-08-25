import type { Meta, StoryObj } from "@storybook/react";
import { Button, Modal } from "components";
import { IModalProps } from "components/modal/types";
import { useModal } from "hooks";
import { FC } from "react";

const ModalComponent: FC<IModalProps> = (props) => {
  const [isOpen, openModal, closeModal] = useModal();
  return (
    <>
      <Button onClick={openModal}>باز کردن</Button>
      <Modal {...props} isOpen={isOpen} onClose={closeModal}>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
          <Button colorType="success" onClick={closeModal}>
            ثبت
          </Button>
          <Button colorType="error" onClick={closeModal}>
            انصراف
          </Button>
        </div>
      </Modal>
    </>
  );
};

const meta = {
  title: "Components/Modal",
  component: ModalComponent,
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
      options: ["sm", "lg", "xl"],
      control: { type: "select" },
    },
    isOpen: {
      control: { type: "boolean" },
    },
  },

  args: {
    onClose: () => {},
    isOpen: false,
    title: "بیمارستان",
    size: "sm",
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalUI: Story = {
  args: {
    title: "عنوان",
    children: <></>,
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { FileUploader } from "components";
import { IFileUploaderProps } from "components/file-uploader/types";
import { FC, useState } from "react";

const FileUploaderComponent: FC<IFileUploaderProps> = (props) => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <FileUploader
      {...props}
      files={files}
      onChangeFiles={(x) => setFiles([...files, ...x])}
      onRemoveFile={(x) => setFiles(files.filter(({ name }) => name !== x))}
    />
  );
};

const meta = {
  title: "Forms/FileUploader",
  component: FileUploaderComponent,
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
    disabled: {
      control: { type: "boolean" },
    },
    accepts: {
      options: ["images", "pdf", "text", "zip", "excel"],
      control: { type: "select" },
    },
    multiple: {
      control: { type: "boolean" },
    },
  },

  args: {
    title: "",
    files: [],
    caption: "",
    onChangeFiles: () => {},
    onRemoveFile: () => {},
    containerClassName: "",
    disabled: false,
    placeholder: "",
    maxFiles: 0,
    maxSize: 0,
    multiple: false,
  },
} satisfies Meta<typeof FileUploader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FileUploaderUI: Story = {
  args: {
    title: "عنوان",
    caption: "حجم کل نباید از 5 مگابایت بیشتر باشد.",
    placeholder: "فایل های خود را آپلود کنید",
    maxFiles: 3,
    maxSize: 5,
    multiple: true,
  },
};

export const FileUploaderDisabledUI: Story = {
  args: {
    title: "عنوان",
    caption: "حجم کل نباید از 5 مگابایت بیشتر باشد.",
    placeholder: "فایل های خود را آپلود کنید",
    disabled: true,
  },
};

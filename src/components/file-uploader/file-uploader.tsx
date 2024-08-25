import { FC, useMemo } from "react";
import { Zoom } from "react-awesome-reveal";
import Dropzone from "react-dropzone";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";
import { FileUploaderContainer } from "./file-uploader.style";
import { IFileUploaderProps } from "./types";

export const FileUploader: FC<IFileUploaderProps> = ({
  title,
  caption,
  onChangeFiles,
  containerClassName,
  onRemoveFile,
  placeholder,
  accepts,
  files,
  maxFiles = 10,
  // MB
  maxSize = 20,
  multiple = true,
  showDropContainer = true,
  disabled = false,
  staticFiles,
  disabledRemoveStaticFiles,
  onRemoveStaticFile,
  disabledRemoveFiles,
}) => {
  const acceptsFile = useMemo(() => {
    if (accepts && accepts.length) {
      return {
        ...(accepts.includes("images") && {
          "image/*": [".png", ".gif", ".jpeg", ".jpg"],
        }),
        ...(accepts.includes("pdf") && {
          "application/pdf": [".pdf"],
        }),
        ...(accepts.includes("text") && {
          "text/plain": [".txt"],
        }),
        ...(accepts.includes("zip") && {
          "application/zip": [".zip"],
        }),
        ...(accepts.includes("excel") && {
          "application/*": [".xls	", ".xlsx"],
        }),
      };
    } else {
      return {
        "image/*": [".png", ".gif", ".jpeg", ".jpg"],
        "application/pdf": [".pdf"],
        "text/plain": [".txt"],
        "application/*": [".xls	", ".xlsx"],
        "application/zip": [".zip"],
      };
    }
  }, [accepts]);

  const onDropHandler = (acceptedFiles: File[]) => {
    if (
      maxFiles &&
      (acceptedFiles.length > maxFiles || files.length + 1 > maxFiles)
    ) {
      toast.error("تعداد فایل های انتخابی بیشتر از حد مجاز است");
      return;
    } else if (maxSize) {
      const acceptedFilesSize = acceptedFiles.reduce((a, b) => a + b.size, 0);
      const filesSize = files.reduce((a, b) => a + b.size, 0);
      if (acceptedFilesSize + filesSize > maxSize * 1024 * 1024) {
        toast.error(
          multiple
            ? "حجم فایل ها بیشتر از حد مجاز است"
            : "حجم فایل بیشتر از حد مجاز است"
        );
        return;
      }
    }

    onChangeFiles(acceptedFiles as any[]);
  };

  return (
    <FileUploaderContainer className={`${containerClassName || ""}`}>
      <p className="title">{title}</p>
      <div className="uploader_container">
        {showDropContainer && (
          <Dropzone
            disabled={disabled}
            onDrop={onDropHandler}
            accept={acceptsFile}
            multiple={multiple}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className="drop_container">
                <input {...getInputProps()} />
                <p className="drop_title">
                  {placeholder || "فایل را اینجا رها کنید."}{" "}
                </p>
                <p className="drop_sub_title">
                  {caption || "حداکثر حجم مجاز 20 مگابایت می باشد"}
                </p>
              </div>
            )}
          </Dropzone>
        )}

        {staticFiles && staticFiles.length > 0 && (
          <div className="files_container static_files">
            <ul>
              <Zoom duration={300} damping={0.1} triggerOnce>
                {staticFiles.map((file) => {
                  return (
                    <li key={file.name}>
                      <IoIosCloseCircleOutline
                        onClick={() =>
                          disabledRemoveStaticFiles
                            ? {}
                            : onRemoveStaticFile?.(file.id)
                        }
                        size={25}
                        className={`remove_icon ${disabledRemoveStaticFiles && "disabled"}`}
                      />
                      <a href={file.url} target="_blank">
                        <p>{file.name}</p>
                      </a>
                    </li>
                  );
                })}
              </Zoom>
            </ul>
          </div>
        )}
        {files.length > 0 && (
          <div className="files_container">
            <ul>
              <Zoom duration={300} damping={0.1} triggerOnce>
                {files.map((file) => {
                  const fileUrl = URL.createObjectURL(file as unknown as Blob);
                  return (
                    <li key={file.name}>
                      <IoIosCloseCircleOutline
                        onClick={() =>
                          disabledRemoveFiles ? {} : onRemoveFile?.(file.name)
                        }
                        size={25}
                        className={`remove_icon ${disabledRemoveFiles && "disabled"}`}
                      />
                      <a href={fileUrl} target="_blank">
                        <p>{file.name}</p>
                      </a>
                    </li>
                  );
                })}
              </Zoom>
            </ul>
          </div>
        )}
      </div>
    </FileUploaderContainer>
  );
};

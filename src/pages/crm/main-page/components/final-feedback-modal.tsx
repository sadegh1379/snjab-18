import { POSTSuggestionResult } from "api/crm";
import { Button, FileUploader, Modal, Textarea } from "components";

import { useState, type FC } from "react";
import { toast } from "react-toastify";
import { fileToBase64 } from "utils";
import { FinalFeedbackContainer } from "../css/final-feedback-modal.style";
import { IFinalFeedbackModalForm } from "../types";

interface IFinalFeedbackModalProps {
  onClose: () => void;
  suggestionId: string;
}

const FinalFeedbackModal: FC<IFinalFeedbackModalProps> = ({
  onClose,
  suggestionId,
}) => {
  const [formValues, setFormValues] = useState<IFinalFeedbackModalForm>({
    comment: "",
    file: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChangeFile = (
    name: keyof IFinalFeedbackModalForm,
    value: File[] | []
  ) => {
    setFormValues({
      ...formValues,
      file: [...formValues.file, ...value],
    });
  };

  const onRemoveFile = (name: string) => {
    setFormValues({
      ...formValues,
      file: formValues.file.filter((f) => f.name !== name),
    });
  };

  const onChangeMessage = (comment: string) => {
    setFormValues({
      ...formValues,
      comment,
    });
  };

  const SubmitFeedback = async () => {
    if (!formValues.comment) {
      toast.error("شرح بازخورد را وارد کنید.");
      return;
    }

    const data = {
      suggestionId,
      comment: formValues.comment,
      result_files: [] as any[],
    };
    if (formValues.file.length) {
      const base64Files = await Promise.all(
        formValues.file.map(async (file) => {
          const { base64, error } = await fileToBase64(file);
          if (!error) {
            return {
              name: file.name,
              data: base64 as string,
            };
          }
          return null;
        })
      );

      data.result_files = base64Files.filter((file) => file !== null);
    }

    setIsSubmitting(true);
    POSTSuggestionResult(data)
      .then(() => {
        toast.success("با موفقیت انجام شد.");
        onClose();
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      title="نظرات مسئول حقوق گیرنده خدمت (بازخورد نهایی)"
    >
      <FinalFeedbackContainer>
        <p className="subject">
          توجه داشته باشید در زمان ثبت، یک کد پیگیری به ثبت کننده داده شده است
          که در صورت پیگیری، فقط این متن به همراه پیوست ها نمایش داده می شود
        </p>
        <Textarea
          title="شرح بازخورد"
          value={formValues.comment}
          onChange={(v) => onChangeMessage(v)}
          rows={5}
        />
        <FileUploader
          files={formValues.file}
          onChangeFiles={(file) => onChangeFile("file", file)}
          onRemoveFile={(name) => onRemoveFile(name)}
          title="ارسال پیوست"
          placeholder="فایل را اینجا رها کنید"
        />
        <div className="submit_button_container">
          <Button
            isLoading={isSubmitting}
            className="submit"
            onClick={SubmitFeedback}
          >
            بروز رســانی
          </Button>
        </div>
      </FinalFeedbackContainer>
    </Modal>
  );
};

export default FinalFeedbackModal;

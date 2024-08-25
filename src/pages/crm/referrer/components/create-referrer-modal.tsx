import { Button, FileUploader, Modal, Textarea } from "components";

import { POSTSuggestionReferrer } from "api/crm";
import { UserSelect } from "components";
import { useState, type FC } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { CreateReferrerContainer } from "../css/create-referrer-modal.style";
import { ISuggestionReferrerValues } from "../types";

interface ICreateReferrerModalProps {
  onClose: () => void;
  setHaveChangeRefer: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateReferrerModal: FC<ICreateReferrerModalProps> = ({
  onClose,
  setHaveChangeRefer,
}) => {
  const [isLoading, setISLoading] = useState(false);
  const { suggestionId } = useParams();
  const [formValues, setFormValues] = useState<ISuggestionReferrerValues>({
    description: "",
    user_id: null,
    files: [],
  });

  const formValidation = () => {
    if (!formValues.user_id) {
      toast.error("کاربر مربوطه را وارد کنید.");
      return false;
    }
    return true;
  };

  const submitForm = async () => {
    if (!formValidation()) {
      return;
    }

    setISLoading(true);
    const suggestionData = {
      suggestionId: suggestionId as string,
      user_id: formValues.user_id ?? null,
      description: formValues.description,
      files: [] as any[],
    };

    // TODO: uncomment after fix from backend
    // if (formValues.files.length) {
    //   const base64Files = await Promise.all(
    //     formValues.files.map(async (files) => {
    //       const { base64, error } = await fileToBase64(files);
    //       if (!error) {
    //         return {
    //           name: files.name,
    //           data: base64 as string,
    //         };
    //       }
    //       return null;
    //     })
    //   );
    //   suggestionData.files = base64Files.filter((files) => files !== null);
    // }

    POSTSuggestionReferrer(suggestionData)
      .then(() => {
        toast.success("با موفقیت انجام شد.");
        setHaveChangeRefer((pre) => !pre);
        onClose();
      })
      .finally(() => setISLoading(false));
  };

  const onChangeForm = (name: string, value: string | null) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onChangeFile = (
    name: keyof ISuggestionReferrerValues,
    value: File[]
  ) => {
    setFormValues({
      ...formValues,
      files: [...formValues.files, ...value],
    });
  };

  const onRemoveFile = (name: string) => {
    setFormValues({
      ...formValues,
      files: formValues.files.filter((f) => f.name !== name),
    });
  };

  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      title="نظرات مسئول حقوق گیرنده خدمت (بازخورد نهایی)"
    >
      <CreateReferrerContainer>
        <p className="subject">
          توجه داشته باشید در زمان ثبت، یک کد پیگیری به ثبت کننده داده شده است
          که در صورت پیگیری، فقط این متن به همراه پیوست ها نمایش داده می شود
        </p>
        <div className="select_referral">
          <UserSelect
            title="ارجاع به"
            onChange={(id) => onChangeForm("user_id", id)}
            userId={formValues.user_id}
            placeholder="ارجاع به"
          />
        </div>
        <Textarea
          title="شرح ارجاع"
          onChange={(value) => onChangeForm("description", value)}
          value={formValues.description}
          rows={5}
        />
        <FileUploader
          files={formValues.files}
          onChangeFiles={(file) => onChangeFile("files", file)}
          onRemoveFile={(name) => onRemoveFile(name)}
          title="ارسال پیوست"
        />
        <div className="submit_button_container">
          <Button className="submit" onClick={submitForm} isLoading={isLoading}>
            ارجاع
          </Button>
        </div>
      </CreateReferrerContainer>
    </Modal>
  );
};

export default CreateReferrerModal;

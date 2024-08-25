import { GETTrackingCode } from "api/crm";
import { ITrackingCodeResponse } from "api/crm/types";
import {
  Button,
  FileUploader,
  Helmet,
  Input,
  PublicHeader,
  Textarea,
} from "components";
import { IFileUploaderProps } from "components/file-uploader/types";
import { useState, type FC } from "react";
import { Fade } from "react-awesome-reveal";
import { Container } from "react-bootstrap";
import { FaHandshake } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { TrackingCodeContainer } from "./css/tracking-code.style";

const baseUrl = process.env.REACT_APP_SERVER_URL_2;

const CrmTrackingSuggestionPage: FC = () => {
  let [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const [isLoading, setIsLoading] = useState(false);
  const [trackingCode, setTrackingCode] = useState<string>(code || "");
  const [trackingInfo, setTrackingInfo] =
    useState<ITrackingCodeResponse | null>(null);
  const [trackingStaticFiles, setTrackingStaticFiles] = useState<
    IFileUploaderProps["staticFiles"]
  >([]);

  const getTrackInfo = () => {
    if (trackingCode) {
      setIsLoading(true);
      GETTrackingCode({ code: trackingCode })
        .then((res) => {
          setTrackingInfo(res);
          if (res && res.result && res.result.files) {
            const files: IFileUploaderProps["staticFiles"] =
              res.result.files.map((file, index) => ({
                id: index,
                name: `اسناد الصاقی - ${index + 1}`,
                url: `${baseUrl}${file.file.url}`,
              }));
            setTrackingStaticFiles(files);
          }
        })
        .catch((err) => {
          if (err?.response?.status === 400) {
            toast.error("کد پیگیری پیدا نشد.");
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <TrackingCodeContainer>
      <Helmet title="پیگیـری" />
      <PublicHeader
        title="پیگیـری"
        icon={<FaHandshake size={24} />}
        backPath=""
      />
      <Container>
        <div className="tracking_form_container">
          <p className="code">
            برای مشاهده نتیجه، کد رهگیری زمان ثبت فرم را وارد کنید .
          </p>

          <div className="input_container">
            <Input
              onChange={(value) => setTrackingCode(value)}
              value={trackingCode}
              className="track_input"
            />
            <Button
              onClick={getTrackInfo}
              className="get_track_button"
              isLoading={isLoading}
            >
              مشاهده
            </Button>
          </div>
        </div>

        <Fade triggerOnce duration={300}>
          {trackingInfo && (
            <div className="track_result_hr">
              <div className="track_result_hr_text">نتیجه پیگیری</div>
            </div>
          )}

          {trackingInfo && trackingInfo.status === "done" ? (
            <div className="feedback_container">
              <Textarea
                title="متن بازخورد"
                onChange={() => {}}
                readOnly
                value={trackingInfo.result?.comment || ""}
                rows={4}
                className="feedback_text"
              />
              <FileUploader
                staticFiles={trackingStaticFiles}
                showDropContainer={false}
                disabledRemoveStaticFiles
                files={[]}
                onChangeFiles={() => {}}
              />
            </div>
          ) : trackingInfo && trackingInfo.status !== "done" ? (
            <p className="notfound">
              متاسفانه برای کد پیگیری وارد شده هنوز بازخوردی ثبت نشده است.
            </p>
          ) : null}
        </Fade>
      </Container>
    </TrackingCodeContainer>
  );
};

export default CrmTrackingSuggestionPage;

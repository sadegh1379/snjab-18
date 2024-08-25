import { POSTSuggestionReferralMessage } from "api/crm";
import {
  ISuggestionReferralMessageRequest,
  ISuggestionReferralsResponse,
} from "api/crm/types";
import { GETUserInfo } from "api/user";
import { DotLoader, Modal } from "components";
import moment from "moment-jalaali";
import {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
  type FC,
} from "react";
import { Fade } from "react-awesome-reveal";
import { BsFileEarmarkFill } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
import { MdAddCircleOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { changeUserInfo } from "state-manager/reducer/profile";
import { RootState } from "state-manager/store";
import { fileToBase64 } from "utils";
import { FeedbackResultContainer } from "../css/feedback-result-modal.style";

interface IFeedbackResultProps {
  onClose: () => void;
  referrerMessages:
    | ISuggestionReferralsResponse["referrals"][0]["messages"]
    | null;
  setHaveChangeRefer: React.Dispatch<React.SetStateAction<boolean>>;
}

const suggestionsText = [
  "با سلام در دست اقدام قرار گرفت",
  "این شکایت قابل بررسی توسط این واحد نبود",
  "ارجاع جهت بررسی و اعمال نظر",
  "سلام، ارجاع شد",
];

const FeedbackResult: FC<IFeedbackResultProps> = ({
  onClose,
  referrerMessages,
  setHaveChangeRefer,
}) => {
  const dispatch = useDispatch();
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const { userInfo } = useSelector((state: RootState) => state.profile);
  const [scrollStatus, setScrollStatus] = useState(false);
  const currentUserId = userInfo?.id;

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [referrerMessages, scrollStatus]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessageHandler();
    }
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] ?? null;
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const sendMessageHandler = async (suggestion?: string) => {
    const messageBody = message?.trim() || (suggestion as string);

    if (!messageBody && !file) return;

    setIsSending(true);
    setScrollStatus(!scrollStatus);

    const data: ISuggestionReferralMessageRequest = {
      referral_id: referrerMessages?.[0]?.suggestion_referral_id!,
      message: messageBody,
    };

    if (file) {
      const { base64 } = await fileToBase64(file);
      data.file = base64 as string;
    }

    POSTSuggestionReferralMessage(data)
      .then((res) => {
        setHaveChangeRefer((pre) => !pre);
        referrerMessages?.push(res.referral);
        setScrollStatus(!scrollStatus);
        setFileName(null);
        setFile(null);
      })
      .finally(() => {
        setIsSending(false);
        setMessage("");
      });
  };

  useEffect(() => {
    if (!userInfo) {
      GETUserInfo().then((res) => {
        dispatch(changeUserInfo(res));
      });
    }
  }, []);

  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      title="نظرات مسئول حقوق گیرنده خدمت (بازخورد نهایی)"
    >
      <FeedbackResultContainer>
        <p className="subject">
          توجه داشته باشید در زمان ثبت، یک کد پیگیری به ثبت کننده داده شده است
          که در صورت پیگیری، فقط این متن به همراه پیوست ها نمایش داده می شود
        </p>
        <div className="chat_card" ref={chatContainerRef}>
          {referrerMessages?.map((chat, index) => (
            <Fade
              triggerOnce
              cascade
              duration={300}
              direction="up"
              className={`chat_container  ${index === referrerMessages.length - 1 && "mb-5"}  ${chat.user_id === currentUserId ? "me" : "you"}`}
              key={`chat_${index}`}
            >
              <div
                className={`bubble_box ${chat.user_id === currentUserId ? "me" : "you"}`}
              >
                {chat.file && chat.file.file ? (
                  <span
                    className="file_body"
                    onClick={() =>
                      window.open(
                        `${process.env.REACT_APP_SERVER_URL_2}${chat.file?.file?.url}`,
                        "_blank"
                      )
                    }
                  >
                    <p
                      className={`file_name ${chat.user_id === currentUserId ? "me" : "you"}`}
                    >
                      file-attachment-{index}
                    </p>
                    <span
                      className={`file_icon ${chat.user_id === currentUserId ? "me" : "you"}`}
                    >
                      <BsFileEarmarkFill size={20} />
                    </span>
                  </span>
                ) : (
                  chat.body
                )}

                <div className="info">
                  <span className="username">
                    {chat.user.id === currentUserId
                      ? userInfo?.firstName + " " + userInfo?.lastName
                      : chat.user.firstName + " " + chat.user.lastName}
                  </span>
                  <span className="date">
                    {moment(chat.created_at).format("HH:mm - jYYYY/jMM/jDD")}
                  </span>
                </div>
              </div>
            </Fade>
          ))}
          {isSending && (
            <Fade
              className="chat_container mb-5 me"
              triggerOnce
              cascade
              duration={300}
              direction="up"
            >
              <div className="bubble_box me">
                <DotLoader />
              </div>
            </Fade>
          )}

          <div className="suggestions_container">
            {suggestionsText.map((text, index) => (
              <span
                onClick={() => sendMessageHandler(text)}
                key={`suggestion-${index}`}
                className="suggestion"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
        <div className="chat_input_container">
          <label htmlFor="browse">
            <MdAddCircleOutline role="button" size={25} className="add" />
          </label>

          <IoIosSend
            onClick={() => sendMessageHandler()}
            role="button"
            size={40}
            className="send"
          />

          <input
            className="chat_input"
            value={message}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setMessage(e.target.value)
            }
            onKeyDown={handleKeyDown}
          />
          <input
            className="chat_file_input"
            id="browse"
            type="file"
            onChange={handleFileChange}
          />
          {fileName && <div className="file_name_display">{fileName}</div>}
        </div>
      </FeedbackResultContainer>
    </Modal>
  );
};

export default FeedbackResult;

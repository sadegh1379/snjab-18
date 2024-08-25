import { POSTSmsOtp } from "api/authentication";
import { Button } from "components";
import { useSecondCounter } from "hooks";
import { useEffect, useState, type FC } from "react";
import { Fade } from "react-awesome-reveal";
import { FcRefresh } from "react-icons/fc";
import { toast } from "react-toastify";
import { HospitalLoginWithSMSFormContainer } from "../css/hospital-with-sms-form.style";
import SmsCodeInput from "./sms-code-input";
const APP_VERSION = require("../../../../package.json").version;

interface IHospitalLoginWithSMSFormProps {
  isLoading: boolean;
  loginHandler: (code?: string) => void;
  clearStep: () => void;
  password: string;
  invalidSms: boolean;
  phone: string;
  captcha: string;
}

const HospitalLoginWithSMSForm: FC<IHospitalLoginWithSMSFormProps> = ({
  isLoading,
  loginHandler,
  clearStep,
  invalidSms,
  phone,
  captcha,
}) => {
  const [timeMin, timeSec, setTime] = useSecondCounter(60 * 2);
  const [resendCount, setResendCount] = useState(0);

  const onLogin = (code: string) => {
    loginHandler(code);
  };

  const resendCode = () => {
    if (timeMin === 0 && timeSec === 0) {
      setTime(60 * 2);
      setResendCount((pre) => pre + 1);
    }
  };

  useEffect(() => {
    if (phone) {
      POSTSmsOtp({ username: phone, captcha })
        .then(() => {
          toast.success("کد با موفقیت ارسال شد.");
        })
        .catch((err) => {
          const message = err?.response?.data?.error;
          if (message === "User not found.") {
            toast.error("کاربر یافت نشد.");
          } else if (message === "Invalid CAPTCHA") {
            toast.error("حاصل عبارت نادرست است.");
          } else {
            toast.error(
              "کاربر گرامی تعداد درخواست ها از حد مجاز بیشتر است لطفاً (شمارنده 2 دقیقه ای) اقدام کنید"
            );
          }
          clearStep();
        });
    }
  }, [resendCount]);

  return (
    <HospitalLoginWithSMSFormContainer>
      <Fade triggerOnce direction="right" duration={300}>
        <div className="login_card">
          <p className="login_title">تایید شماره تلفن</p>
          <p className="login_sub">
            لطفاً کد ارسال شده به تلفن همراه خود را وارد کنید
          </p>

          <div className="sms_input_container">
            <SmsCodeInput
              onComplete={(code) => onLogin(code)}
              hasError={invalidSms}
            />
          </div>

          <p className="timer">
            {`${timeMin < 10 ? `0${timeMin}` : timeMin}`}:
            {`${timeSec < 10 ? `0${timeSec}` : timeSec}`}
          </p>
          <span className="revalidate_time_container">
            <FcRefresh
              onClick={resendCode}
              size={22}
              className={`revalidate_icon ${timeMin || timeSec ? "not_active" : ""}`}
            />
            <p>ارسال مجدد کد</p>
          </span>
          <Button
            isLoading={isLoading}
            onClick={clearStep}
            variant="outlined"
            className="mt-5"
          >
            بازگشت
          </Button>
          <div className="version">نسخــه ({APP_VERSION})</div>
        </div>
      </Fade>
    </HospitalLoginWithSMSFormContainer>
  );
};

export default HospitalLoginWithSMSForm;

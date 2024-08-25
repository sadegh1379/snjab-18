import { POSTSmsOtp, POSTVerifySmsOtp } from "api/authentication";
import axios from "axios";
import { Button, Input } from "components";
import { useSecondCounter } from "hooks";
import { useEffect, useRef, useState, type FC } from "react";
import { Fade } from "react-awesome-reveal";
import { FcRefresh } from "react-icons/fc";
import { toast } from "react-toastify";
import { HospitalPasswordRecoveryContainer } from "../css/hospital-recovery-password.style";
import SmsCodeInput from "./sms-code-input";
const APP_VERSION = require("../../../../package.json").version;

interface IHospitalPasswordRecoveryProps {
  phone: string;
  captcha: string;
  clearStep: () => void;
  resetForm: () => void;
}

const HospitalPasswordRecovery: FC<IHospitalPasswordRecoveryProps> = ({
  clearStep,
  phone,
  captcha,
  resetForm,
}) => {
  const [timeMin, timeSec, setTime] = useSecondCounter(60 * 2);
  const [resendCount, setResendCount] = useState(0);
  const [otpCode, setOtpCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [invalidSms, setInvalidSms] = useState(false);
  const newPasswordInputRef = useRef<HTMLInputElement>(null);

  const [formValues, setFormValues] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  const onChangeForm = (name: string, value: string) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onCompleteCode = (code: string) => {
    setOtpCode(code);
    newPasswordInputRef?.current?.focus();
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

  const passwordRecoveryHandler = async () => {
    const { newPassword, confirmNewPassword } = formValues;
    if (!otpCode) {
      toast.error("کد ارسال شده را وارد کنید.");
      return;
    }
    if (!newPassword) {
      toast.error("کلمه عبور جدید را وارد کنید.");
      return;
    }
    if (newPassword.length < 8) {
      toast.error("کلمه عبور باید حداقل 8 کارکتر باشد");
      return;
    }
    if (!confirmNewPassword) {
      toast.error("تکرار کلمه عبور جدید را وارد کنید");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      toast.error("کلمه عبور جدید با تکرار آن همخوانی ندارد");
      return;
    }
    setIsLoading(true);
    POSTVerifySmsOtp(phone, otpCode)
      .then((user) => {
        if (user.access_token) {
          axios
            .put(
              `${process.env.REACT_APP_SERVER_API}/core/users/password`,
              {
                password: newPassword,
                passwordConfirmation: confirmNewPassword,
              },
              {
                headers: {
                  Authorization: `Bearer ${user.access_token}`,
                },
              }
            )
            .then((res) => {
              toast.success("با موفقیت انجام شد");
              setFormValues({
                confirmNewPassword: "",
                newPassword: "",
              });
              resetForm();
              clearStep();
            });
        }
      })
      .catch(() => {
        toast.error("کد وارد شده صحیح نیست");
        setInvalidSms(true);
        setTimeout(() => setInvalidSms(false), 1000);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <HospitalPasswordRecoveryContainer>
      <Fade triggerOnce direction="right" duration={300}>
        <div className="recovery_password_card">
          <p className="recovery_title">بازیابی رمـز عبور </p>
          <p className="recovery_sub">
            لطفاً کد ارسال شده به تلفن همراه خود را وارد کنید
          </p>

          <div className="sms_input_container">
            <SmsCodeInput
              onComplete={(code) => onCompleteCode(code)}
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
          <Input
            title=" کلمه عبور جدید"
            value={formValues.newPassword}
            onChange={(v) => onChangeForm("newPassword", v)}
            placeholder="کلمه عبـور جدید را وارد کنید "
            containerClassName="password_recovery_input"
            type="password"
            ref={newPasswordInputRef}
          />
          <Input
            title="تکرار کلمه عبور جدید"
            value={formValues.confirmNewPassword}
            onChange={(v) => onChangeForm("confirmNewPassword", v)}
            placeholder="کلمه عبـور جدید را وارد کنید "
            containerClassName="password_recovery_input"
            type="password"
          />

          <Button
            isLoading={isLoading}
            onClick={passwordRecoveryHandler}
            className="mt-4"
          >
            ثبت
          </Button>
          <Button onClick={clearStep} variant="outlined" className="mt-2">
            بازگشت
          </Button>
          <div className="version">نسخــه ({APP_VERSION})</div>
        </div>
      </Fade>
    </HospitalPasswordRecoveryContainer>
  );
};

export default HospitalPasswordRecovery;

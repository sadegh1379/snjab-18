import { Button, Input } from "components";
import { Dispatch, type FC } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { HospitalLoginFormContainer } from "../css/hospital-form.style";
const APP_VERSION = require("../../../../package.json").version;

interface IHospitalLoginFormProps {
  isLoading: boolean;
  loginHandler: () => void;
  clearStep: () => void;
  onChangeForm: (name: string, value: string) => void;
  password: string;
  setActiveLoginWith: Dispatch<
    React.SetStateAction<"PASSWORD" | "ONE_TIME_PASSWORD">
  >;
  setStep: Dispatch<
    React.SetStateAction<"USERNAME" | "PASSWORD" | "PASSWORD_RECOVERY">
  >;
}

const HospitalLoginForm: FC<IHospitalLoginFormProps> = ({
  isLoading,
  loginHandler,
  clearStep,
  onChangeForm,
  password,
  setActiveLoginWith,
  setStep,
}) => {
  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginHandler();
  };

  return (
    <HospitalLoginFormContainer>
      <Fade triggerOnce direction="right" duration={300}>
        <div className="login_card">
          <form onSubmit={onLogin}>
            <p className="login_title">ورود</p>
            <p className="login_sub">لطفاً کلمـه عبور خود را وارد کنید</p>
            <Input
              title="کلمه عبور"
              value={password}
              onChange={(v) => onChangeForm("password", v)}
              placeholder="کلمه عبـور جدید را وارد کنید "
              containerClassName="username_input"
              type="password"
              autoFocus
            />

            <Button type="submit" isLoading={isLoading} className="mt-5">
              ورود بـه سامانـه
            </Button>
            <Button onClick={clearStep} variant="outlined" className="mt-2">
              بازگشت
            </Button>
            <div className="footer_title">
              کلمه عبور خود را فراموش کرده اید؟{" "}
              <Link
                onClick={() => setActiveLoginWith("ONE_TIME_PASSWORD")}
                to={"#"}
                className="sign_up"
              >
                ورود با رمز یکبار مصرف
              </Link>
              <span className="separator">&nbsp;&nbsp; | &nbsp;&nbsp;</span>
              <Link
                onClick={() => setStep("PASSWORD_RECOVERY")}
                to={"#"}
                className="sign_up"
              >
                بازیابی رمـز عبور
              </Link>
            </div>
            <div className="version">نسخــه ({APP_VERSION})</div>
          </form>
        </div>
      </Fade>
    </HospitalLoginFormContainer>
  );
};

export default HospitalLoginForm;

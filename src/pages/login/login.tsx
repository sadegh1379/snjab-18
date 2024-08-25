import { useTour } from "@reactour/tour";
import { POSTLoginWithPassword, POSTVerifySmsOtp } from "api/authentication";
import { Helmet } from "components";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { changeToken } from "state-manager/reducer/profile";
import { RootState } from "state-manager/store";
import {
  HospitalLoginForm,
  HospitalLoginWithSMSForm,
  HospitalPasswordRecovery,
  LoginForm,
  LoginInfo,
  Navbar,
  OverlayBanner,
  PublicMenu,
} from "./components";
import { LoginContainer } from "./css/login.style";

const Login: FC = () => {
  const { token: userToken, seenTours } = useSelector(
    (state: RootState) => state.profile
  );
  const { setIsOpen: setIsOpenTour } = useTour();
  const navigate = useNavigate();
  const [activeLoginWith, setActiveLoginWith] = useState<
    "PASSWORD" | "ONE_TIME_PASSWORD"
  >("PASSWORD");
  const [step, setStep] = useState<
    "USERNAME" | "PASSWORD" | "PASSWORD_RECOVERY"
  >("USERNAME");
  const [formValues, setFormValues] = useState({
    phone: "",
    password: "",
    captcha: "",
  });
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [invalidSms, setInvalidSms] = useState(false);
  let [searchParams] = useSearchParams();

  const loginHandler = (code?: string) => {
    const { phone, password, captcha } = formValues;

    if (!password && activeLoginWith === "PASSWORD") {
      toast.error("کلمه عبور را وارد کنید.");
      return;
    }

    setIsLoading(true);

    if (activeLoginWith === "PASSWORD") {
      POSTLoginWithPassword({
        username: phone,
        captcha: captcha,
        password,
      })
        .then((res) => {
          if (res.access_token) {
            loginSuccessHandler(res.access_token);
          }
        })
        .catch((err) => {
          const message = err?.response?.data?.error;
          if (message === "Invalid CAPTCHA") {
            toast.error("حاصل عبارت نادرست است.");
            setStep("USERNAME");
          } else {
            toast.error("نام کاربری یا کلمه عبور اشتباه است.");
          }
        })
        .finally(() => setIsLoading(false));
    } else {
      POSTVerifySmsOtp(phone, code as string)
        .then((res) => {
          if (res.access_token) {
            loginSuccessHandler(res.access_token);
          }
        })
        .catch(() => {
          toast.error("نام کاربری یا کلمه عبور اشتباه است.");
          setInvalidSms(true);
          setTimeout(() => setInvalidSms(false), 1000);
        })
        .finally(() => setIsLoading(false));
    }
  };

  const loginSuccessHandler = (token: string) => {
    dispatch(changeToken(token));
    toast.success("ورود موفق.");
    const callbackUrl = searchParams.get("callbackUrl");
    navigate(callbackUrl || "/applications");
  };

  const clearStep = () => {
    setStep("USERNAME");
  };

  const onChangeForm = (name: string, value: string) => {
    if (name === "phone") {
      if (value.length === 2 && !value.startsWith("09")) {
        toast.error("شماره موبایل باید با 09 شروع شود.");
        return;
      }
      if (value.length !== 12) {
        setFormValues({
          ...formValues,
          phone: value,
        });
      }
    } else {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  };

  const resetFormValues = () => {
    setFormValues({
      captcha: "",
      password: "",
      phone: "",
    });
  };

  // if user logged in redirect to home
  useEffect(() => {
    if (userToken) {
      const callbackUrl = searchParams.get("callbackUrl");
      navigate(callbackUrl || "/applications");
    }
  }, [userToken]);

  // tour popover
  useEffect(() => {
    if (!seenTours.includes("login")) {
      setTimeout(() => setIsOpenTour(true), 500);
    }
  }, [seenTours]);

  return (
    <LoginContainer>
      <Helmet title="ورود" />
      <OverlayBanner />
      <Navbar />
      <div className="login_container">
        {step === "PASSWORD" ? (
          activeLoginWith === "PASSWORD" ? (
            <HospitalLoginForm
              loginHandler={loginHandler}
              clearStep={clearStep}
              isLoading={isLoading}
              setActiveLoginWith={setActiveLoginWith}
              onChangeForm={onChangeForm}
              password={formValues.password}
              setStep={setStep}
            />
          ) : (
            <HospitalLoginWithSMSForm
              loginHandler={loginHandler}
              clearStep={clearStep}
              isLoading={isLoading}
              phone={formValues.phone}
              password={formValues.password}
              invalidSms={invalidSms}
              captcha={formValues.captcha}
            />
          )
        ) : step === "USERNAME" ? (
          <LoginForm
            activeLoginWith={activeLoginWith}
            setActiveLoginWith={setActiveLoginWith}
            setStep={setStep}
            onChangeForm={onChangeForm}
            phone={formValues.phone}
            captcha={formValues.captcha}
          />
        ) : (
          <HospitalPasswordRecovery
            clearStep={clearStep}
            phone={formValues.phone}
            captcha={formValues.captcha}
            resetForm={resetFormValues}
          />
        )}

        <LoginInfo />
      </div>
      <PublicMenu />
    </LoginContainer>
  );
};

export default Login;

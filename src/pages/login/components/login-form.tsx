import { GETLoginCaptcha } from "api/authentication";
import { GETOrganizations } from "api/hospital";
import { IHospital } from "api/hospital/types";
import {
  Button,
  ButtonGroup,
  Input,
  Modal,
  SelectWithLogoInput,
  Skeleton,
} from "components";
import { ISelectedLogoOption } from "components/select-with-logo/types";
import { useModal } from "hooks";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FC,
} from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { FcRefresh } from "react-icons/fc";
import { toast } from "react-toastify";
import { validation } from "utils";
import { LoginFormContainer } from "../css/login-form.style";
import { ServiceModalMobileContainer } from "../css/public-menu-mobile.style";

const APP_VERSION = require("../../../../package.json").version;

interface ILoginFormProps {
  activeLoginWith: "PASSWORD" | "ONE_TIME_PASSWORD";
  setActiveLoginWith: Dispatch<
    SetStateAction<"PASSWORD" | "ONE_TIME_PASSWORD">
  >;
  setStep: React.Dispatch<
    React.SetStateAction<"USERNAME" | "PASSWORD" | "PASSWORD_RECOVERY">
  >;
  onChangeForm: (name: string, value: string) => void;
  phone: string;
  captcha: string;
}

const LoginForm: FC<ILoginFormProps> = ({
  activeLoginWith,
  setActiveLoginWith,
  onChangeForm,
  setStep,
  phone,
  captcha,
}) => {
  const [isOpen, openModal, closeModal] = useModal();
  const [hospitals, setHospitals] = useState<IHospital[] | null>(null);
  const [captchaImage, setCaptchaImage] = useState("");
  const [refreshCaptcha, setRefreshCaptcha] = useState(false);
  const [selectedHospital, setSelectedHospital] =
    useState<ISelectedLogoOption | null>(null);
  const captchaInputRef = useRef<HTMLInputElement>(null);

  // focus of captcha input
  useEffect(() => {
    if (phone?.length === 11) {
      captchaInputRef?.current?.focus();
    }
  }, [phone]);

  // get captcha
  useEffect(() => {
    setCaptchaImage("");
    GETLoginCaptcha().then((res) => {
      setCaptchaImage(res.captcha);
    });
  }, [refreshCaptcha]);

  // get organizations
  useEffect(() => {
    if (isOpen) {
      GETOrganizations().then((result) => {
        setHospitals(result);
      });
    }
  }, [isOpen]);

  const hospitalOptions = useMemo(
    () =>
      hospitals
        ? hospitals.map(({ name, id, logo }) => ({
            label: name,
            value: id,
            logo: `${process.env.REACT_APP_SERVER_URL_2}${logo}`,
          }))
        : [],
    [hospitals]
  );

  const serviceItems = [
    {
      title: "گزارش خطا",
      src: "img/login/warning.webp",
      link: `https://app.snjob.ir/login/error_report/${selectedHospital?.value}`,
    },
    {
      title: "عوامل تهدید کننده",
      src: "img/login/fmea.webp",
      link: `https://app.snjob.ir/login/fmea/${selectedHospital?.value}`,
    },
    {
      title: "رضایت سنجی",
      src: "img/login/rezayat.webp",
      link: `https://app.snjob.ir/login/checklist/${selectedHospital?.value}`,
    },
    {
      title: "فرم های همگانی",
      src: "img/login/public-checklist.webp",
      link: `https://app.snjob.ir/login/public/${selectedHospital?.value}`,
    },
    {
      title: "ارتباط با مشتریان",
      src: "img/login/crm.webp",
      link: `https://crm.snjob.ir/suggestions/form?hospital_id=${selectedHospital?.value}`,
    },
  ];
  const getServiceHandler = (link: string) => {
    window.location.href = link;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!phone) {
      toast.error("شماره تلفن همراه را وارد کنید.");
    } else if (!validation.isIranianPhoneNumber(phone)) {
      toast.error("شماره تلفن وارد شده صحیح نیست");
    } else {
      setStep("PASSWORD");
    }
  };

  return (
    <LoginFormContainer>
      <Fade triggerOnce direction="left" duration={300}>
        <div className="login_card">
          <form onSubmit={onSubmit}>
            <p className="login_title">ورود</p>
            <div id="tour-login-with">
              <ButtonGroup
                containerClassName="button_group"
                buttonsClassName="button_group_item"
                items={[
                  {
                    title: "ورود با کلمه عبور",
                    value: "PASSWORD",
                  },
                  {
                    title: "ورود با رمز یکبار مصرف",
                    value: "ONE_TIME_PASSWORD",
                  },
                ]}
                onClick={(v) => setActiveLoginWith(v as typeof activeLoginWith)}
                value={activeLoginWith}
              />
            </div>
            <Input
              type="number"
              title="شماره موبایل"
              value={phone}
              onChange={(v) => onChangeForm("phone", v)}
              placeholder="شماره موبایل خود را وارد کنید"
              containerClassName="username_input"
              inputMode="numeric"
              justNumber
            />

            <div className="captcha_container">
              <Input
                type="number"
                value={captcha}
                onChange={(v) => onChangeForm("captcha", v)}
                placeholder="حاصل عبارت"
                containerClassName="captcha_input"
                ref={captchaInputRef}
                inputMode="numeric"
              />
              <div className="image_container">
                {captchaImage ? (
                  <img alt="" src={captchaImage} className="captcha_image" />
                ) : (
                  <Skeleton width="100px" height="50px" />
                )}
                <FcRefresh
                  onClick={() => setRefreshCaptcha((pre) => !pre)}
                  size={25}
                  className="refresh_icon"
                />
              </div>
            </div>

            <Button type="submit" className="mt-5" disabled={!captcha}>
              {activeLoginWith === "PASSWORD"
                ? "ثبت و ادامــه"
                : "ارسـال رمـز یـکبار مصـرف"}
            </Button>

            <Button
              className="mt-2 no_auth_service_btn"
              colorType="warning"
              onClick={openModal}
            >
              خدمات بدون احراز هویت
            </Button>
            <Modal
              isOpen={isOpen}
              onClose={closeModal}
              title="خدمات بدون احــراز هـویت"
            >
              <ServiceModalMobileContainer>
                <p className="title">
                  کاربر گرامی برای استفاده از خدمات بدون احراز هویت باید مرکز
                  درمانی خود را انتخاب کنید. توجه داشته باشید پس از انتخاب خدمات
                  بدون احراز هویت در صفحه بارگذاری می گردند
                </p>
                <SelectWithLogoInput
                  className="select_hospital"
                  options={hospitalOptions}
                  value={selectedHospital}
                  onChange={(v) => setSelectedHospital(v)}
                  placeholder="نام بیمارستان "
                  isLoading={hospitals === null}
                />
                {selectedHospital && (
                  <div className="service_list">
                    <Zoom triggerOnce duration={300}>
                      {serviceItems.map((service, index) => (
                        <div
                          onClick={() => getServiceHandler(service.link)}
                          className="service_card"
                          key={index}
                        >
                          <img className="image" src={service.src} alt="" />
                          <p className="text">{service.title}</p>
                        </div>
                      ))}
                    </Zoom>
                  </div>
                )}
              </ServiceModalMobileContainer>
            </Modal>
            <div className="footer_title">
              {/* در سامانه عضو نشده اید ؟{" "}
              <Link to={"#"} className="sign_up">
                ثبت نام
              </Link> */}
            </div>
            <div className="version">نسخــه ({APP_VERSION})</div>
          </form>
        </div>
      </Fade>
    </LoginFormContainer>
  );
};

export default LoginForm;

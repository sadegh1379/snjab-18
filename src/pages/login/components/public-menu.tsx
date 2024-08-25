import { GETOrganizations } from "api/hospital";
import { IHospital } from "api/hospital/types";
import { Modal, SelectWithLogoInput } from "components";
import { ISelectedLogoOption } from "components/select-with-logo/types";
import { useModal } from "hooks";
import { useEffect, useMemo, useState, type FC } from "react";
import { Zoom } from "react-awesome-reveal";
import { LuMenu } from "react-icons/lu";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import {
  PublicMenuContainer,
  ServiceModalContainer,
} from "../css/public-menu.style";

const PublicMenu: FC = () => {
  const [isOpenServices, openServicesModal, closeServicesModal] = useModal();
  const [hospitals, setHospitals] = useState<IHospital[] | null>(null);
  const [searchParams] = useSearchParams();
  const noAuthServiceStatus = searchParams.get("no-auth-service");
  const organization_id = searchParams.get("organization_id");
  const singleOrganization = searchParams.get("organization");

  const navigate = useNavigate();

  const [selectedHospital, setSelectedHospital] =
    useState<ISelectedLogoOption | null>(null);

  useEffect(() => {
    GETOrganizations().then((result) => {
      setHospitals(result);
    });
  }, []);

  useEffect(() => {
    if (hospitals && hospitals.length && hospitals.length === 1) {
      const { name, id, logo } = hospitals[0];
      setSelectedHospital({
        label: name,
        value: id,
        logo: `${process.env.REACT_APP_SERVER_URL_2}${logo}`,
      });
    }
  }, [hospitals]);

  // open no auth service modal with search params
  useEffect(() => {
    if (
      hospitals &&
      hospitals.length &&
      noAuthServiceStatus &&
      organization_id
    ) {
      const findHospital = hospitals.find((h) => h.id === organization_id);
      if (findHospital) {
        openServicesModal();
        const { name, id, logo } = findHospital;
        setSelectedHospital({
          label: name,
          value: id,
          logo: `${process.env.REACT_APP_SERVER_URL_2}${logo}`,
        });
      }
    }
  }, [hospitals]);

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
      title: "ارتباط با مشتریان ",
      src: "img/login/crm.webp",
      link: `/crm/public?hospital_id=${selectedHospital?.value}`,
    },
  ];

  const getServiceHandler = (link: string) => {
    closeServicesModal();
    if (link.includes("http")) {
      window.location.href = link;
    } else {
      navigate(link);
    }
  };

  if (singleOrganization) return <></>;

  return (
    <PublicMenuContainer>
      <div className="floating_button_container" id="tour-login-no-auth">
        <button
          className={`floating_button ${isOpenServices && "show"}`}
          onClick={openServicesModal}
        >
          <LuMenu size={28} />
        </button>
        <p className="title">خدمات بدون احــراز هـویت</p>
      </div>
      {isOpenServices && (
        <Modal
          isOpen={isOpenServices}
          onClose={closeServicesModal}
          title="خدمات بدون احــراز هـویت"
        >
          <ServiceModalContainer>
            <p className="title">
              کاربر گرامی برای استفاده از خدمات بدون احراز هویت باید مرکز درمانی
              خود را انتخاب کنید. توجه داشته باشید پس از انتخاب خدمات بدون احراز
              هویت در صفحه بارگذاری می گردند
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
          </ServiceModalContainer>
        </Modal>
      )}
    </PublicMenuContainer>
  );
};

export default PublicMenu;

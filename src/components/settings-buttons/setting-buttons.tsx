import { ConfirmationModal, Modal, Tooltip } from "components";
import { useModal, useOutsideClick } from "hooks";
import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { FaHome, FaPowerOff, FaUserShield } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onLogout } from "state-manager/reducer/profile";
import { changeMode } from "state-manager/reducer/theme";
import { RootState } from "state-manager/store";
import {
  ServiceModalContainer,
  SettingButtonsContainer,
} from "./setting-buttons.style";
import { ISettingButtons } from "./types";

export const SettingButtons: FC<ISettingButtons> = ({
  className,
  position = "bottom-right",
}) => {
  const { userInfo } = useSelector((state: RootState) => state.profile);

  const [isOpen, setIsOpen] = useState(false);

  const [
    isOpenConfirmLogoutModal,
    openConfirmLogoutModal,
    closeConfirmLogoutModal,
  ] = useModal();
  const [
    isOpenNoAuthServicesModal,
    openNoAuthServicesModal,
    closeNoAuthServicesModal,
  ] = useModal();
  const [menuVisible, setMenuVisible] = useState(false);
  const mode = useSelector((state: RootState) => state.theme.mode);
  const buttonListRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setMenuVisible(true);
    } else {
      setTimeout(() => {
        setMenuVisible(false);
      }, 300); // Duration of the fade-out animation
    }
  }, [isOpen]);

  const toggleMenu = useCallback((open: boolean) => {
    setIsOpen(open);
  }, []);

  const changeModeHandler = useCallback(() => {
    dispatch(changeMode(mode === "light" ? "dark" : "light"));
    setIsOpen(false);
  }, [dispatch, mode]);

  const logoutHandler = () => {
    closeConfirmLogoutModal();
    dispatch(onLogout());
    navigate("/login");
  };

  useOutsideClick(buttonListRef, () => {
    if (isOpenNoAuthServicesModal) return;
    setIsOpen(false);
  });

  const tooltipPlacement = useMemo(
    () => (position === "bottom-right" ? "left" : "right"),
    [position]
  );

  const serviceItems = [
    {
      title: "گزارش خطا",
      src: "/img/login/warning.webp",
      link: `https://app.snjob.ir/login/error_report/${userInfo?.organisation?.id}`,
    },
    {
      title: "عوامل تهدید کننده",
      src: "/img/login/fmea.webp",
      link: `https://app.snjob.ir/login/fmea/${userInfo?.organisation?.id}`,
    },
    {
      title: "رضایت سنجی",
      src: "/img/login/rezayat.webp",
      link: `https://app.snjob.ir/login/checklist/${userInfo?.organisation?.id}`,
    },
    {
      title: "فرم های همگانی",
      src: "/img/login/public-checklist.webp",
      link: `https://app.snjob.ir/login/public/${userInfo?.organisation?.id}`,
    },
    {
      title: "ارتباط با مشتریان ",
      src: "/img/login/crm.webp",
      link: `/crm/public?hospital_id=${userInfo?.organisation?.id}`,
    },
  ];

  const buttonList = useMemo(
    () => (
      <Zoom cascade damping={0.3} duration={300}>
        <Tooltip
          text={mode === "light" ? "حالت تاریک" : "حالت روشن"}
          placement={tooltipPlacement}
          show
        >
          <button onClick={changeModeHandler} className="list_button">
            {mode === "light" ? (
              <MdDarkMode size={28} />
            ) : (
              <MdLightMode size={28} />
            )}
          </button>
        </Tooltip>
        <Tooltip text={"بازگشت به خانه"} placement={tooltipPlacement} show>
          <button
            onClick={() => {
              toggleMenu(false);
              navigate("/applications");
            }}
            className="list_button"
          >
            <FaHome size={28} />
          </button>
        </Tooltip>
        <Tooltip
          text={"خدمات بدون احراز هویت"}
          placement={tooltipPlacement}
          show
        >
          <button onClick={openNoAuthServicesModal} className="list_button">
            <FaUserShield size={28} />
          </button>
        </Tooltip>
        <Tooltip text={"خـروج"} placement={tooltipPlacement} show>
          <button onClick={openConfirmLogoutModal} className="list_button">
            <FaPowerOff size={28} />
          </button>
        </Tooltip>
      </Zoom>
    ),
    [
      mode,
      tooltipPlacement,
      changeModeHandler,
      toggleMenu,
      navigate,
      openNoAuthServicesModal,
      openConfirmLogoutModal,
    ]
  );

  const getServiceHandler = (link: string) => {
    closeNoAuthServicesModal();
    if (link.includes("http")) {
      window.location.href = link;
    } else {
      navigate(link);
    }
  };

  return (
    <SettingButtonsContainer className={className}>
      <div className={`floating_button_overlay ${isOpen ? "show" : "hide"}`} />
      <div
        id="tour-application-floating-button"
        className={`floating_button_container ${position}`}
      >
        <button
          className={`floating_button ${isOpen && "show"}`}
          onClick={() => toggleMenu(!isOpen)}
        >
          {isOpen ? <IoMdClose size={28} /> : <LuMenu size={28} />}
        </button>
        {menuVisible && (
          <div
            ref={buttonListRef}
            className={`button_list ${isOpen ? "show" : "hide"}`}
          >
            {buttonList}
          </div>
        )}
      </div>
      {isOpenConfirmLogoutModal && (
        <ConfirmationModal
          isOpen={isOpenConfirmLogoutModal}
          onClose={closeConfirmLogoutModal}
          title="آیا از خروج مطمعن هستید؟"
          confirmText="خروج"
          confirmButtonColorType="error"
          onConfirm={logoutHandler}
        />
      )}

      {isOpenNoAuthServicesModal && (
        <Modal
          isOpen={isOpen}
          onClose={closeNoAuthServicesModal}
          title="خدمات بدون احــراز هـویت"
        >
          <ServiceModalContainer>
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
          </ServiceModalContainer>
        </Modal>
      )}
    </SettingButtonsContainer>
  );
};

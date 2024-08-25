import { GETUserInfo } from "api/user";
import { Button, Skeleton } from "components";
import { useOutsideClick } from "hooks";
import { FC, useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Form } from "react-bootstrap";
import { BiMessageRoundedError } from "react-icons/bi";
import { FaMoon, FaRegBell, FaRegEnvelope } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi2";
import { RiCloseLine, RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { changeUserInfo, onLogout } from "state-manager/reducer/profile";

import { changeMode } from "state-manager/reducer/theme";
import { RootState } from "state-manager/store";
import { AuthHeaderContainer } from "./auth-header.style";
import { IAuthHeaderProps } from "./types";

const NOTIFICATIONS: any[] = [
  // {
  //   title: "دعوتنامه به کمیته 12 فروردین 1403",
  //   read: true,
  //   icon: <RiCloseLine size={20} className="notification_close" />,
  //   caption: "5 ساعت پیش (ارسال توسط مومنی)",
  // },
];

export const AuthHeader: FC<IAuthHeaderProps> = ({}) => {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [notifDropdownOpen, setNotifDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const notifDropdownRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mode = useSelector((state: RootState) => state.theme.mode);
  const { userInfo, token } = useSelector((state: RootState) => state.profile);
  const messageCount = 0;

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  const changeModeHandler = () => {
    dispatch(changeMode(mode === "light" ? "dark" : "light"));
    setUserDropdownOpen(false);
  };

  const logoutHandler = () => {
    dispatch(onLogout());
    navigate("/login");
  };

  useEffect(() => {
    if (!userInfo) {
      GETUserInfo().then((res) => {
        dispatch(changeUserInfo(res));
      });
    }
  }, []);

  useOutsideClick(dropdownRef, () => setUserDropdownOpen(false));
  useOutsideClick(notifDropdownRef, () => setNotifDropdownOpen(false));

  return (
    <AuthHeaderContainer>
      <div className="right_section">
        <div
          className="info_box"
          onClick={() => setNotifDropdownOpen(!notifDropdownOpen)}
          ref={notifDropdownRef}
        >
          <FaRegBell
            className="notification_icon"
            id="tour-application-notif"
            size={25}
          />
          {messageCount ? <p className="badge_number">{messageCount}</p> : null}

          {notifDropdownOpen && (
            <Fade
              direction="down"
              className="notification_dropdown"
              triggerOnce
              duration={300}
            >
              <>
                <div className="header">
                  <RiCloseLine className="close_icon" size={25} />
                  <p className="title">اعلان ها و کارهای جدید</p>
                </div>
                <div className="notifications">
                  <div className="menu_list">
                    {NOTIFICATIONS.length === 0 ? (
                      <div className="notfound_message">
                        <BiMessageRoundedError size={35} />
                        <p className="empty_text">هنور هیچ پیامی وجود ندارد </p>
                      </div>
                    ) : (
                      NOTIFICATIONS.map((notif, index) => (
                        <div className="menu_item" key={index}>
                          <div className="notification_logo">
                            <FaRegEnvelope
                              className="notification_logo_icon"
                              size={20}
                            />
                          </div>
                          <div className="notification_info">
                            <p className="notification_info_title">
                              {notif.title}
                            </p>
                            <p className="notification_info_subtitle">
                              {notif.caption}
                            </p>
                          </div>
                          {notif.read ? (
                            <RiCloseLine
                              size={20}
                              className="notification_close"
                            />
                          ) : (
                            <div className="notification_new"></div>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </div>
                <div className="footer">
                  <RiDeleteBin6Line size={25} />
                  <p className="title">حذف خوانده شده ها</p>
                </div>
              </>
            </Fade>
          )}
        </div>
      </div>
      <div className="left_section">
        {userInfo ? (
          <div className="info_box">
            <img
              className="hospital_icon"
              src={`${process.env.REACT_APP_SERVER_URL_2}${userInfo.organisation.logo}`}
              alt=""
            />
            <p className="title">{userInfo.organisation.name}</p>
          </div>
        ) : (
          <Skeleton className="user_info_skeleton" />
        )}

        {userInfo ? (
          <div
            className="info_box cursor_pointer"
            onClick={toggleUserDropdown}
            ref={dropdownRef}
          >
            <HiUserCircle size={30} color="#1976D2" />
            <p className="title">
              {userInfo.firstName + " " + userInfo.lastName}
            </p>
            {userDropdownOpen && (
              <Fade
                direction="down"
                className="profile_dropdown"
                triggerOnce
                duration={300}
              >
                <>
                  <div className="header">
                    <HiUserCircle size={65} color="#1976D2" />
                    <div className="user_info">
                      <p className="user_info_title">
                        {userInfo.firstName + " " + userInfo.lastName}
                      </p>
                      {/* <p className="user_info_subtitle">
                        مدیر بهبود کیفیت بیمارستان
                      </p> */}
                    </div>
                  </div>
                  <div className="profile_box">
                    <Button onClick={() => {}} disabled>
                      تنظیمات کاربــری
                    </Button>
                    <div className="menu_list">
                      <div
                        onClick={changeModeHandler}
                        className="menu_item change_mode"
                      >
                        <div className="change_mode_item">
                          <FaMoon size={24} />
                          <p>حـالت تاریـک</p>
                        </div>
                        <Form.Check
                          type="switch"
                          checked={mode === "dark"}
                          readOnly
                        />
                      </div>
                    </div>
                    <Button
                      onClick={logoutHandler}
                      variant="outlined"
                      colorType="error"
                      className="logout_btn"
                    >
                      خروج از سنجاب
                    </Button>
                  </div>
                </>
              </Fade>
            )}
          </div>
        ) : (
          <Skeleton className="user_info_skeleton" />
        )}
      </div>
    </AuthHeaderContainer>
  );
};

import type { FC } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "state-manager/reducer/theme";
import { RootState } from "state-manager/store";
import { NavbarContainer } from "../css/navbar.style";

interface INavbarProps {}

const Navbar: FC<INavbarProps> = () => {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  const changeModeHandler = () => {
    dispatch(changeMode(mode === "light" ? "dark" : "light"));
  };

  return (
    <NavbarContainer>
      <ul>
        <li
          onClick={() => (window.location.href = "https://snjob.ir/faq.html")}
        >
          راهنما
        </li>
        <li
          onClick={() =>
            (window.location.href = "https://snjob.ir/contact.html")
          }
        >
          تماس با ما
        </li>
        <li
          onClick={() => (window.location.href = "https://snjob.ir/faq.html")}
        >
          سوالات متداول
        </li>
        <li className="mode" id="tour-login-mode">
          {mode === "light" ? (
            <MdDarkMode onClick={changeModeHandler} size={28} />
          ) : (
            <MdLightMode onClick={changeModeHandler} size={28} />
          )}
        </li>
      </ul>
    </NavbarContainer>
  );
};

export default Navbar;

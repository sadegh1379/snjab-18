import { SettingButtons } from "components";
import { FC } from "react";
import { Footer } from "./components";
import { LayoutContainer } from "./css/layout.style";

const DefaultLayout: FC<{
  children: React.ReactNode;
  hideSettingMenu?: boolean;
  showFooter?: boolean;
}> = ({ children, hideSettingMenu, showFooter }) => (
  <LayoutContainer>
    <div className="content">{children}</div>
    {showFooter && <Footer />}
    {!hideSettingMenu && <SettingButtons position="bottom-left" />}
  </LayoutContainer>
);
export default DefaultLayout;

import { SettingButtons } from "components";
import { FC } from "react";

const DefaultLayout: FC<{
  children: React.ReactNode;
  hideSettingMenu?: boolean;
}> = ({ children, hideSettingMenu }) => (
  <div>
    <div>this is side bar</div>
    <div>
      {children}
      {!hideSettingMenu && <SettingButtons position="bottom-left" />}
    </div>
  </div>
);
export default DefaultLayout;

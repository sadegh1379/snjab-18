import { PageLoader } from "components";
import { FC, ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useLocation, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { routesProps } from "router/config";
import { changeToken } from "state-manager/reducer/profile";
import { RootState } from "state-manager/store";
import { DefaultLayout, TicketLayout } from "../layout";

interface RequireAuthProps {
  children: ReactNode;
}

interface RequireNoAuthProps {
  children: ReactNode;
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const { token: userToken } = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();

  const location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token") || userToken;

  useEffect(() => {
    if (token) {
      dispatch(changeToken(token));
      searchParams.delete("token");
      setSearchParams(searchParams);
    } else {
      toast.warn("شما خارج شدید.");
      navigate(`/login?callbackUrl=${location.pathname}`, {
        replace: true,
      });
    }
  }, [searchParams, setSearchParams, userToken]);

  if (!token) return <PageLoader />;

  return <>{children}</>;
};

const RequireNoAuth: FC<RequireNoAuthProps> = ({ children }) => {
  const { token: userToken } = useSelector((state: RootState) => state.profile);
  const navigate = useNavigate();

  // TODO: uncomment this useEffect
  // useEffect(() => {
  //   navigate(`/applications`);
  // }, [userToken]);

  return <>{children}</>;
};

const RoutesLayoutHandler = ({
  type,
  hideSettingMenu,
  children,
  showFooter = true,
}: {
  type: routesProps["layout"]["type"];
  hideSettingMenu?: boolean;
  children: React.ReactNode;
  showFooter?: boolean;
}) => {
  switch (type) {
    case "default":
      return (
        <DefaultLayout
          showFooter={showFooter}
          hideSettingMenu={hideSettingMenu}
        >
          {children}
        </DefaultLayout>
      );
    case "ticket":
      return (
        <TicketLayout hideSettingMenu={hideSettingMenu}>
          {children}
        </TicketLayout>
      );
    default:
      return null;
  }
};

export { RequireAuth, RequireNoAuth, RoutesLayoutHandler };

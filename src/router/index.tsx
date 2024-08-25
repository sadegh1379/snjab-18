import {
  RequireAuth,
  RequireNoAuth,
  RoutesLayoutHandler,
} from "app/app-helper";
import { PageLoader } from "components";
import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CheckVpn } from "utils/check-vpn";
import { ScrollToTop } from "../utils";
import routes from "./config";

const Router: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <ScrollToTop />
      <CheckVpn />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        {routes.map((routeItem, index) => {
          if (routeItem.authType === "auth") {
            return (
              <Route
                key={index}
                path={routeItem.path}
                element={
                  <RequireAuth>
                    <RoutesLayoutHandler {...routeItem.layout}>
                      <routeItem.component />
                    </RoutesLayoutHandler>
                  </RequireAuth>
                }
              />
            );
          } else if (routeItem.authType === "no-auth") {
            return (
              <Route
                key={index}
                path={routeItem.path}
                element={
                  <RequireNoAuth>
                    <RoutesLayoutHandler {...routeItem.layout}>
                      <routeItem.component />
                    </RoutesLayoutHandler>
                  </RequireNoAuth>
                }
              />
            );
          }
        })}
      </Routes>
    </Suspense>
  );
};

export default Router;

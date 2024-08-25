import React, { FC } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import routes from "router/config";
import { BreadcrumbContainer } from "./breadcrumb.style";
import { IBreadcrumbProps, RouteMap } from "./types";

export const Breadcrumb: FC<IBreadcrumbProps> = ({ className }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const routeMap = routes.reduce((acc: RouteMap, route) => {
    if (route.breadCrumbName) {
      acc[route.path] = route.breadCrumbName;
    }
    return acc;
  }, {});

  return (
    <BreadcrumbContainer className={`${className || "breadcrumb_container"}`}>
      <ul className="breadcrumb gap-1 d-flex align-items-center">
        <li className="breadcrumb-item ">
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          return (
            <React.Fragment key={`link_item_${index}`}>
              <IoIosArrowBack size={22} className="mb-1" />
              <li className="breadcrumb-item">
                <Link to={to}>{routeMap[to as keyof typeof routeMap]}</Link>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </BreadcrumbContainer>
  );
};

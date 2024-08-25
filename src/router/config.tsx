import withTour from "app/with-tour";
import { lazy } from "react";

const NotFoundPage = lazy(() => import("../pages/not-found/not-found"));
const LoginPage = lazy(() => import("../pages/login/login"));
const CrmPage = lazy(() => import("../pages/crm/main-page/crm"));
const CrmPublicPage = lazy(() => import("../pages/crm/public/public"));
const CrmReferrerPage = lazy(() => import("../pages/crm/referrer/referrer"));
const CrmDetails = lazy(() => import("../pages/crm/details/details"));
const CrmReferralPage = lazy(
  () => import("../pages/crm/referral/main-page/crm")
);
const CrmReferralDetailsPage = lazy(
  () => import("../pages/crm/referral/details/details")
);
const CrmReferralReferrerPage = lazy(
  () => import("../pages/crm/referral/referrer/referrer")
);
const CrmTrackingSuggestionPage = lazy(
  () => import("../pages/crm/track-suggestion/track-suggestion")
);
const ApplicationsPage = lazy(
  () => import("../pages/applications/applications")
);
const CrmDashboard = lazy(() => import("../pages/crm/dashboard/dashboard"));

export type routesProps = {
  path: string;
  component: React.FC;
  layout: {
    type: "default" | "ticket";
    hideSettingMenu?: boolean;
    showFooter?: boolean;
  };

  authType: "no-auth" | "auth";
  showFooter?: boolean;
  breadCrumbName?: string;
};

const routes: routesProps[] = [
  {
    path: "*",
    component: NotFoundPage,
    layout: {
      type: "default",
      hideSettingMenu: true,
    },
    authType: "no-auth",
  },
  {
    path: "/login",
    authType: "no-auth",
    layout: {
      type: "default",
      hideSettingMenu: true,
      showFooter: false,
    },
    component: withTour(LoginPage, "login"),
    breadCrumbName: "ساپورت",
  },
  {
    path: "/crm",
    component: CrmPage,
    layout: {
      type: "default",
    },
    authType: "auth",
  },
  {
    path: "/crm/public",
    component: CrmPublicPage,
    layout: {
      type: "default",
    },
    authType: "no-auth",
  },
  {
    path: "/crm/:suggestionId/referrer",
    component: CrmReferrerPage,
    layout: {
      type: "default",
    },
    authType: "auth",
  },
  {
    path: "/crm/:suggestionId",
    component: CrmDetails,
    layout: {
      type: "default",
    },
    authType: "auth",
  },

  {
    path: "/crm/referral",
    component: CrmReferralPage,
    layout: {
      type: "default",
    },
    authType: "auth",
  },
  {
    path: "/crm/referral/:suggestionId",
    component: CrmReferralDetailsPage,
    layout: {
      type: "default",
    },
    authType: "auth",
  },
  {
    path: "/crm/referral/:suggestionId/referrer",
    component: CrmReferralReferrerPage,
    layout: {
      type: "default",
    },
    authType: "auth",
  },
  {
    path: "/applications",
    component: withTour(ApplicationsPage, "applications"),
    layout: {
      type: "default",
    },
    authType: "auth",
  },
  {
    path: "/crm/track-suggestion",
    component: CrmTrackingSuggestionPage,
    layout: {
      type: "default",
    },
    authType: "no-auth",
  },
  {
    path: "/crm/dashboard",
    component: CrmDashboard,
    layout: {
      type: "default",
    },
    authType: "auth",
  },
];

export default routes;

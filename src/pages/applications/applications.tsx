import { useTour } from "@reactour/tour";
import { GETApplications } from "api/applications";
import { IApplicationResponse } from "api/applications/types";
import { GETUserInfo } from "api/user";
import { AuthHeader, Helmet, Skeleton } from "components";
import { useModal } from "hooks";
import { useEffect, useState, type FC } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { changeUserInfo } from "state-manager/reducer/profile";
import { RootState } from "state-manager/store";
import {
  ActivateModuleModal,
  HospitalInfo,
  IntroductionModuleModal,
  ModuleCard,
} from "./component";
import { ApplicationsContainer } from "./css/applications.style";

interface IApplicationsProps {}

const Applications: FC<IApplicationsProps> = ({}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [introductionModuleInfo, setIntroductionModuleInfo] = useState({
    description: "",
    introVideo: "",
  });
  const { setIsOpen: setIsOpenTour } = useTour();
  const [
    isOpenActivateModuleModal,
    openActivateModuleModal,
    closeActivateModuleModal,
  ] = useModal();

  const [
    isOpenIntroductionModuleModal,
    openIntroductionModuleModal,
    closeIntroductionModuleModal,
  ] = useModal();

  const { userInfo, token, seenTours } = useSelector(
    (state: RootState) => state.profile
  );
  const [applications, setApplications] = useState<
    IApplicationResponse[] | null
  >(null);

  useEffect(() => {
    setApplications(null);
    GETApplications().then((res) => {
      setApplications(res);
    });
  }, []);

  useEffect(() => {
    if (!userInfo) {
      GETUserInfo().then((res) => {
        dispatch(changeUserInfo(res));
      });
    }
  }, []);

  const getSubApplicationHandler = (link: string, pathVariables?: string) => {
    if (link?.includes("http")) {
      window.location.href = `${link}?${pathVariables?.replace("$token", token!)}`;
    } else {
      navigate(link);
    }
  };

  // tour popover
  useEffect(() => {
    if (!seenTours.includes("applications")) {
      setTimeout(() => setIsOpenTour(true), 500);
    }
  }, [seenTours]);

  return (
    <ApplicationsContainer>
      <Helmet title="ماژول ها" />
      <div className="overlay">
        <div className="small_purple circle purple"></div>
        <div className="big_red circle red"></div>
        <div className="small_green circle green"></div>
        <div className="small_red circle red"></div>
        <div className="large_green circle green"></div>
      </div>

      <AuthHeader />

      {userInfo ? (
        <HospitalInfo
          className="hospital_info"
          hospitalLogo={`${process.env.REACT_APP_SERVER_URL_2}${userInfo.organisation.logo}`}
          hospitalName={userInfo.organisation.name}
        />
      ) : (
        <>
          <Skeleton className="hospital_logo" circle />
          <Skeleton className="hospital_name" />
        </>
      )}

      <Container className="hospital_applications">
        <p className="title_container">
          یک سامانه برای تمام نیاز های بیمارستان
        </p>

        <div className="applications" id="tour-application-card">
          {applications ? (
            applications?.map((application, index) => {
              return (
                <ModuleCard
                  key={`application-${index}`}
                  status={application.status}
                  title={application.name}
                  image={`${process.env.REACT_APP_SERVER_URL_2}${application.logo}`}
                  description={application.description}
                  introVideo={application.introVideo}
                  subApplications={application.subApplications}
                  openActivateModuleModal={openActivateModuleModal}
                  openIntroductionModuleModal={openIntroductionModuleModal}
                  getSubApplicationHandler={getSubApplicationHandler}
                  setIntroductionModuleInfo={setIntroductionModuleInfo}
                />
              );
            })
          ) : (
            <>
              <Skeleton className="loader" />
              <Skeleton className="loader" />
              <Skeleton className="loader" />
              <Skeleton className="loader" />
              <Skeleton className="loader" />
              <Skeleton className="loader" />
              <Skeleton className="loader" />
              <Skeleton className="loader" />
            </>
          )}
        </div>
      </Container>
      {isOpenActivateModuleModal && (
        <ActivateModuleModal onClose={closeActivateModuleModal} />
      )}
      {isOpenIntroductionModuleModal && (
        <IntroductionModuleModal
          onClose={closeIntroductionModuleModal}
          description={introductionModuleInfo.description}
          introVideo={introductionModuleInfo.introVideo}
        />
      )}
    </ApplicationsContainer>
  );
};

export default Applications;

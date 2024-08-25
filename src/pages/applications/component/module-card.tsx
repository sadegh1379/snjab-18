import { IApplicationResponse } from "api/applications/types";
import { Dispatch, type FC } from "react";
import { FaQuestionCircle, FaUnlock } from "react-icons/fa";
import { generateLightColor } from "utils";
import { ModuleCardContainer } from "../css/module-card.style";

interface IModuleCardProps {
  title: string;
  image: string;
  status: string;
  description: string;
  introVideo: string;
  subApplications: IApplicationResponse["subApplications"];
  getSubApplicationHandler: (link: string, pathVariables?: string) => void;
  openActivateModuleModal: () => void;
  openIntroductionModuleModal: () => void;
  setIntroductionModuleInfo: Dispatch<
    React.SetStateAction<{
      description: string;
      introVideo: string;
    }>
  >;
}

const ModuleCard: FC<IModuleCardProps> = ({
  title,
  image,
  status,
  introVideo,
  description,
  subApplications,
  getSubApplicationHandler,
  openActivateModuleModal,
  openIntroductionModuleModal,
  setIntroductionModuleInfo,
}) => {
  return (
    <ModuleCardContainer $lineColor={generateLightColor()} $status={status}>
      {status === "inactive" && (
        <>
          <div
            onClick={openActivateModuleModal}
            className={`active_module_badge ${status}`}
          >
            <FaUnlock size={18} className="me-2 pb-1" />
            فعالسازی
          </div>
          <div
            onClick={() => {
              setIntroductionModuleInfo({ description, introVideo });
              openIntroductionModuleModal();
            }}
            className={`introduction_module_badge ${status}`}
          >
            <FaQuestionCircle size={18} className="me-2" />
            معرفی
          </div>
        </>
      )}
      <img src={image} className="card_image" />
      <p className="title">{title}</p>
      <div className="line" />
      <div className="sub_modules">
        {subApplications?.map((sub) => (
          <div
            key={sub.id}
            className="sub_module_parent"
            onClick={() =>
              status === "active"
                ? getSubApplicationHandler(sub.link, sub.pathVariables)
                : {}
            }
          >
            <img
              className="sub_module"
              src={`${process.env.REACT_APP_SERVER_URL_2}${sub.logo}`}
              alt=""
            />
            <p className="sub_title" title={sub.name}>
              {sub.name}
            </p>
          </div>
        ))}
      </div>
    </ModuleCardContainer>
  );
};

export default ModuleCard;

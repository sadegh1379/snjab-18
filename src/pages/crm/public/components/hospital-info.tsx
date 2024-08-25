import { ButtonGroup, Skeleton } from "components";
import { type FC } from "react";
import { HospitalInfoContainer } from "../css/hospital-info.style";

interface IHospitalInfoProps {
  hospitalLogo: string | null;
  hospitalName: string | null;
  activeStep: string;
  onChangeStep: (step: string) => void;
}

const HospitalInfo: FC<IHospitalInfoProps> = ({
  hospitalLogo,
  hospitalName,
  activeStep,
  onChangeStep,
}) => {
  return (
    <HospitalInfoContainer>
      <div>
        {hospitalLogo && hospitalName ? (
          <>
            <img
              src={`${process.env.REACT_APP_SERVER_URL_2}${hospitalLogo}`}
              className="logo"
              alt={hospitalName}
            />
            <p className="title">{hospitalName}</p>
          </>
        ) : (
          <>
            <Skeleton className="logo" circle />
            <Skeleton className="my-3" height="20px" />
          </>
        )}
      </div>
      <div>
        <ButtonGroup
          items={[
            { title: "انتقادات و شکایت", value: "report" },
            { title: "تقدیر و تشکر", value: "reward" },
          ]}
          value={activeStep}
          onClick={onChangeStep}
          buttonsClassName="btn_group_item"
        />
      </div>
    </HospitalInfoContainer>
  );
};

export default HospitalInfo;

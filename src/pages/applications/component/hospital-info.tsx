import { type FC } from "react";
import { HospitalInfoContainer } from "../css/hospital-info.style";

interface IHospitalInfoProps {
  hospitalLogo: string;
  hospitalName: string;
  className?: string;
}

const HospitalInfo: FC<IHospitalInfoProps> = ({
  hospitalLogo,
  hospitalName,
  className,
}) => {
  return (
    <HospitalInfoContainer className={className || ""}>
      <img className="logo" src={hospitalLogo} alt={""} />{" "}
      <p className="title">{hospitalName}</p>
    </HospitalInfoContainer>
  );
};

export default HospitalInfo;

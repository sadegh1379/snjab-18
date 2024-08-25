import type { FC } from "react";
import { ImCircleLeft } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { PublicHeaderContainer } from "./public-header.style";
import { IPublicHeaderProps } from "./types";

export const PublicHeader: FC<IPublicHeaderProps> = ({
  title,
  icon,
  backPath,
}) => {
  const navigate = useNavigate();

  return (
    <PublicHeaderContainer>
      <div className="public_header_right_section">
        {icon}
        <p className="public_header_title">{title}</p>
      </div>
      {backPath && (
        <ImCircleLeft
          onClick={() => {
            navigate(`/${backPath}`);
          }}
          size={20}
          className="pointer"
        />
      )}
    </PublicHeaderContainer>
  );
};

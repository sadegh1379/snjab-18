import { FC } from "react";
import {IHelmetProps} from "./types"
import { default as BHelmet } from "react-helmet";


export const Helmet: FC<IHelmetProps> = ({
  title,
}) => {
  return (
      <BHelmet>
        <title>سنجاب | {title}</title>
      </BHelmet>
  );
};

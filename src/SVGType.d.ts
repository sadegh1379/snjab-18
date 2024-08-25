declare module "*.svg" {
  import React from "react";

  interface SvgProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    style?: React.CSSProperties;
  }

  const ReactComponent: React.FC<SvgProps>;
  export { ReactComponent };

  const content: string;
  export default content;
}

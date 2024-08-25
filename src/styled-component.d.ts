import "styled-components";
import { IGlobalTheme } from "./style/types";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends IGlobalTheme {}
}

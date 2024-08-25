import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { ThemeProvider } from "styled-components";
import { appTheme } from "../src/style/app-theme";
import { GlobalStyle } from "../src/style/globalStyles";

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: appTheme.light,
      dark: appTheme.dark,
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyle,
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

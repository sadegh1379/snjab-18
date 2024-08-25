import { IGlobalTheme, Theme } from "./types";

const globalColors = {
  errorLight: "#A62E2F",
  errorDark: "#B81F12",
  successLight: "#1AAB49",
  successDark: "#137F36",
  infoLight: "#353E59",
  infoDark: "#35325A",
  info: "#0067CD",
  InfoLight2: "#DAEDFF",
  InfoDark2: "#8EC8FF",
  warningLight: "#FFCA4D",
  warningDark: "#FFB300",
};

export const chartColorPalettes = {
  vibrant: [
    "#b432b4",
    "#af441a",
    "#DDDF00",
    "#24CBE5",
    "#64E572",
    "#FF9655",
    "#FFF263",
    "#6AF9C4",
    "#32CD32",
    "#FFD700",
  ],
  sunset: [
    "#FF6347",
    "#1E90FF",
    "#32CD32",
    "#FFDAB9",
    "#8A2BE2",
    "#FF4500",
    "#7FFFD4",
    "#DAA520",
    "#EE82EE",
    "#00FA9A",
  ],
  pastel: [
    "#FFB6C1",
    "#6495ED",
    "#F08080",
    "#D2691E",
    "#BDB76B",
    "#00CED1",
    "#FF1493",
    "#ADFF2F",
    "#FFD700",
    "#4682B4",
  ],
};

export const sizes: IGlobalTheme["sizes"] = {
  border: {
    r_8: "8px",
    r_10: "10px",
  },
};

export const appTheme: Theme = {
  light: {
    sizes,
    mode: "light",
    colors: {
      background: {
        ...globalColors,
        primary: "#FAFAFA",
        primaryReverse: "#000000",
        secondary: "#F7F7F7",
        gray: "#E1E3E5",
      },
      text: {
        ...globalColors,
        primary: "#000000",
        primaryReverse: "#FAFAFA",
        secondary: "#6D6D70",
      },
      border: {
        primary: "#CECECE",
      },
      shadow: {
        sm: "0 0 28px -11px rgba(0, 0, 0, 0.3)",
        md: "0 0 28px -4px rgba(0, 0, 0, 0.3)",
        lg: "0 0 45px -1px rgba(0, 0, 0, 0.3)",
      },
    },
  },

  dark: {
    sizes,
    mode: "dark",
    colors: {
      background: {
        primary: "#212121",
        primaryReverse: "#FFFFFF",
        secondary: "#6D6D70",
        gray: "#525252",
        ...globalColors,
      },
      text: {
        ...globalColors,
        primary: "#FAFAFA",
        primaryReverse: "#000000",
        secondary: "#939393",
      },
      border: {
        primary: "#939393",
      },
      shadow: {
        sm: "00 0 45px -1px rgba(0, 0, 0, 0.8)",
        md: "00 0 45px -1px rgba(0, 0, 0, 0.8)",
        lg: "00 0 45px -1px rgba(0, 0, 0, 0.8)",
      },
    },
  },
};

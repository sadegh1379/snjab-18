import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface IThemeState {
  mode: "light" | "dark";
}

const initialState: IThemeState = {
  mode: (localStorage.getItem("theme") as IThemeState["mode"]) || "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeMode: (state, action: PayloadAction<"light" | "dark">) => {
      localStorage.setItem("theme", action.payload);
      state.mode = action.payload;
    },
  },
});

export const { changeMode } = themeSlice.actions;

export default themeSlice.reducer;

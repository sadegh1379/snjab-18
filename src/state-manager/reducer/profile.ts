import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IUserProfileResponse } from "api/user/types";
import moment from "moment-jalaali";

export interface Profile {
  selectedYear: string;
  token: string | null;
  userInfo: IUserProfileResponse | null;
  seenTours: string[];
}

const initialState: Profile = {
  token: JSON.parse(localStorage.getItem("token") as string) || null,
  userInfo: JSON.parse(localStorage.getItem("user-info") as string) || null,
  seenTours: JSON.parse(localStorage.getItem("seen-tours") as string) || [],
  selectedYear:
    JSON.parse(localStorage.getItem("selected-year") as string) ||
    moment().jYear(),
};

export const counterSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    changeSelectedYear: (state, action: PayloadAction<string>) => {
      localStorage.setItem("selected-year", JSON.stringify(action.payload));
      state.selectedYear = action.payload;
    },
    changeToken: (state, action: PayloadAction<string>) => {
      localStorage.setItem("token", JSON.stringify(action.payload));
      state.token = action.payload;
    },
    changeUserInfo: (state, action: PayloadAction<IUserProfileResponse>) => {
      localStorage.setItem("user-info", JSON.stringify(action.payload));
      state.userInfo = action.payload;
    },
    addSeenTour: (state, action: PayloadAction<string>) => {
      if (!state.seenTours.includes(action.payload)) {
        const seenTours = [...state.seenTours, action.payload];
        localStorage.setItem("seen-tours", JSON.stringify(seenTours));
        state.seenTours = seenTours;
      }
    },
    onLogout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("user-info");
      localStorage.removeItem("selected-year");
      state.token = null;
      state.userInfo = null;
    },
  },
});

export const {
  changeSelectedYear,
  changeToken,
  onLogout,
  changeUserInfo,
  addSeenTour,
} = counterSlice.actions;

export default counterSlice.reducer;

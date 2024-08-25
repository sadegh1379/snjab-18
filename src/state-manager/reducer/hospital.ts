import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface IHospital {
  wardList: IGHospitalWard[];
  hospitalId?: string | number;
  users: IGUser[];
}

const initialState: IHospital = {
  wardList: [],
  users: [],
  hospitalId: undefined,
};

export const hospitalSlice = createSlice({
  name: "hospital",
  initialState,
  reducers: {
    changeWardList: (state, action: PayloadAction<IGHospitalWard[]>) => {
      state.wardList = action.payload;
    },
    changeOrganizationUsers: (state, action: PayloadAction<IGUser[]>) => {
      state.users = action.payload;
    },
    changeHospitalId: (state, action: PayloadAction<string | number>) => {
      localStorage.setItem("hospital-id", JSON.stringify(action.payload));
      state.hospitalId = action.payload;
    },
  },
});

export const { changeWardList, changeHospitalId, changeOrganizationUsers } =
  hospitalSlice.actions;

export default hospitalSlice.reducer;

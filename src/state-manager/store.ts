import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer/counter";
import hospitalReducer from "./reducer/hospital";
import profileReducer from "./reducer/profile";
import themeReducer from "./reducer/theme";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    profile: profileReducer,
    hospital: hospitalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

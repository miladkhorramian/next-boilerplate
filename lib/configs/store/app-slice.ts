import * as rt from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";

interface AppStatusState {
  status: "running" | "shut-down" | "under-development";
}

const initialState: AppStatusState = {
  status: "running",
};

export const appSlice = rt.createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppStatus: (state, action: PayloadAction<AppStatusState["status"]>) => {
      state.status = action.payload;
    },
  },
});

export const { setAppStatus } = appSlice.actions;
export default appSlice.reducer;

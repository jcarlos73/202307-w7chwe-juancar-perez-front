import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Robot } from "../../types";
import { RobotsState } from "./types";

const initialRobotsState: RobotsState = {
  robots: [],
};

const robotsSlice = createSlice({
  name: "robots",
  initialState: initialRobotsState,
  reducers: {
    loadRobots: (
      _currentRobotsState: RobotsState,
      action: PayloadAction<Robot[]>,
    ): RobotsState => ({
      robots: action.payload,
    }),
  },
});

export const robotsReducer = robotsSlice.reducer;

export const { loadRobots: loadRobotsActionCreator } = robotsSlice.actions;

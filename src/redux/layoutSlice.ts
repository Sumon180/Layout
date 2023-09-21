// src/features/toggleSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface ToggleState {
  isToggled: boolean;
}

const initialState: ToggleState = {
  isToggled: false,
};

const layoutSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isToggled = !state.isToggled;
    },
  },
});

export const { toggle } = layoutSlice.actions;
export default layoutSlice.reducer;

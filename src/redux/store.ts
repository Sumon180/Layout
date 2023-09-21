// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./layoutSlice";

const store = configureStore({
  reducer: {
    toggle: layoutSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

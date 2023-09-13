import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./slice/navbarSlice";

export const store = configureStore({
  reducer: { navbarReducer },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

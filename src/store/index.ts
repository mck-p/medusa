import { configureStore } from "@reduxjs/toolkit";
import type { State } from "./types";

export default (initialState?: State) =>
  configureStore({
    reducer: (s) => s,
    preloadedState: initialState,
  });

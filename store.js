import { configureStore } from "@reduxjs/toolkit";
import markerReducer from "@slices/markerSlice";

export const store = configureStore({
  reducer: {
    marker: markerReducer,
  },
});

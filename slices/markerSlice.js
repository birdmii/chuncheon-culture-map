import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  place: null,
};

export const markerSlice = createSlice({
  name: "marker",
  initialState,
  reducers: {
    handlePlace: (state, action) => {
      return { ...state, place: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { handlePlace } = markerSlice.actions;
export const getPlace = (state) => state.marker.place;

export default markerSlice.reducer;

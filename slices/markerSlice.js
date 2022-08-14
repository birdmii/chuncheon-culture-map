import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  place: null,
  marker: null,
};

export const markerSlice = createSlice({
  name: "marker",
  initialState,
  reducers: {
    handlePlace: (state, action) => {
      return { ...state, place: action.payload };
    },
    handleMarker: (state, action) => {
      return { ...state, marker: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { handlePlace, handleMarker } = markerSlice.actions;
export const getPlace = (state) => state.marker.place;
export const getMarker = (state) => state.marker.marker;

export default markerSlice.reducer;

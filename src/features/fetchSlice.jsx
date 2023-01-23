import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  error: false,
  darkMode:false
};

const FetchSlice1 = createSlice({
  name: "lastfm",
  initialState,
  reducers: {
 
    fetchError: (state, { payload }) => {
      state.error = true;
    
    },
    setDarkMode: (state, { payload }) => {
      state.darkMode = payload;
     
    },
  },
});

export const {fetchError, setDarkMode } = FetchSlice1.actions;

export default FetchSlice1.reducer;
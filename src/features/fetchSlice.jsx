import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  error: false,
  darkMode:false
};

const FetchSlice = createSlice({
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

export const {fetchError, setDarkMode } = FetchSlice.actions;

export default FetchSlice.reducer;
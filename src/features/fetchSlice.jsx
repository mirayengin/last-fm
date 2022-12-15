import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  artist: [],
  loading: false,
  error:false
}

const fetchSlice = createSlice({
  name: "lastfm",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSucess: (state, payload) => {
      state.loading = false;
      state.artist = payload;
    },
    fetchFail: (state, payload) => {
      state.error = true;
      state.artist = payload;
    },


  }
});

export const {fetchStart,fetchSucess,fetchFail} = fetchSlice.actions

export default fetchSlice.reducer
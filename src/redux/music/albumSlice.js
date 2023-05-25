/* eslint-disable */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAlbums = createAsyncThunk(
  'api/fetchAlbum',
  async (id) => {
    const response = await fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/search?q=${id}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
          'x-rapidapi-key':
            '7c7248f8c0msh368079a738f19f3p162a58jsn7946ca3196de',
          'Retry-After': 6,
        },
      },
    );
    const data = await response.json();
    return data;
  },
);

export const albumsSlice = createSlice({
  name: 'albums',
  initialState: {
    data: [],
    status: null,
  },
  reducers: {
  },
  extraReducers: {
    [fetchAlbums.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = 'success';
    },
    [fetchAlbums.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchAlbums.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default albumsSlice.reducer;

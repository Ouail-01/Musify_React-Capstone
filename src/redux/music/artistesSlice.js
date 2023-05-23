import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const ARTISTS_LIST = [
  '3',
  '384236',
  '1',
  '160',
  '12246',
  '13',
  '246791',
  '75491',
  '65',
  '288166',
  '342437',
  '382937',
  '413',
  '145',
  '290',
  '75798',
  '339209',
  '144227',
  '9635624',
  '2224',
  '1949',
];
const API_URL = 'https://deezerdevs-deezer.p.rapidapi.com/';
const API_CONFIG = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
    'x-rapidapi-key': '7c7248f8c0msh368079a738f19f3p162a58jsn7946ca3196de',
    'Retry-After': 6,
  },
};

export const fetchArtists = createAsyncThunk(
  'api/fetchArtists',
  async () => {
    const promises = ARTISTS_LIST.map((artist) => fetch(`${API_URL}artist/${artist}`, API_CONFIG).then((response) => response.json()));
    const data = await Promise.all(promises);
    return data;
  },
);

export const artistsSlice = createSlice({
  name: 'artists',
  initialState: {
    data: [],
    status: null,
  },
  reducers: {
  },
  extraReducers: {
    [fetchArtists.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = 'success';
    },
    [fetchArtists.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchArtists.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default artistsSlice.reducer;

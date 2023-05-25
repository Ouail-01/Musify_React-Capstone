import { createSlice } from '@reduxjs/toolkit';

const musicSlice = createSlice({
  name: 'music',
  initialState: {
    music: [],
  },
  reducers: {
    changeMusic: (state, action) => ({ ...state, music: action.payload }),
  },
});

export const { changeMusic } = musicSlice.actions;
export default musicSlice.reducer;

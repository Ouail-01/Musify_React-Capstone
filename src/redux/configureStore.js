import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './search/searchSlice';
import musicReducer from './music/musicSlice';
import artistsReducer from './music/artistesSlice';
import albumReducer from './music/albumSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    music: musicReducer,
    artists: artistsReducer,
    albums: albumReducer,
  },
});

export default store;

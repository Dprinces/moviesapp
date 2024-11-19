// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './redux/movieSlice'; // Import default export from movieSlice

const store = configureStore({
  reducer: {
    movies: movieReducer, // Attach the reducer here
  },
});

export default store;

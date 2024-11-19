import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPopularMovies = createAsyncThunk(
  'movies/fetchPopularMovies',
  async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=9c90563183mshfae2ffb8c2ab419p1f6fb2jsn7c948f1b0f2c');
    const data = await response.json();
    return data; 
  }
);

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],  
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload.results || []; 
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;

import React, { useState, useEffect } from 'react';

const api = "api_key=9c90563183mshfae2ffb8c2ab419p1f6fb2jsn7c948f1b0f2c";
const BaseURL = "https://api.themoviedb.org/3";
const ImgURL = "https://image.tmdb.org/t/p/w300"; 

const searchMovieUrl = `${BaseURL}/search/movie?${api}&query=Avengers%20Endgame`;

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const response = await fetch(searchMovieUrl);
        const result = await response.json();
        console.log(result);
        if (result.results && result.results.length > 0) {
          setMovies(result.results); // Update state with the movie data
        } else {
          console.log("No movies found.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchMovieData();
  }, []);

  return (
    <div>
      <h2>Movie List</h2>
      {movies.length > 0 ? (
        <div>
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={`${ImgURL}${movie.poster_path}`} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading movies...</p>
      )}
    </div>
  );
};

export default MovieList;

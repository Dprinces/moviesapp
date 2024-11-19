import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from '../components/MovieList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/movies" element={<MovieList />} /> </Routes>
    </Router>
  );
};

export default App;

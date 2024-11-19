import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList'; 
import HomePage from './pages/HomePage';   

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="/movies" element={<MovieList />} /> 
      </Routes>
    </div>
  );
};

export default App;

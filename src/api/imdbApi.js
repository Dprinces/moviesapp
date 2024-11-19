const fetchMovies = async () => {
  try {
    const response = await fetch(
      'https://imdb8.p.rapidapi.com/v2/search-advance?country=US&language=en-US',
      {
        method: 'POST',
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ first: 5 }), 
      }
    );

    if (!response.ok) throw new Error('Failed to fetch data from RapidAPI');

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

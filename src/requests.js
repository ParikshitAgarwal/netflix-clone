const api = {
  key: "3e04f10540e1a09b1e0052f09bd9adfb",
  base: "https://api.themoviedb.org/3",
};

const requests = {
  fetchTrending: `${api.base}/trending/all/week?api_key=${api.key}&language=en-US`,
  fetchNetflixOriginals: `${api.base}/discover/tv?api_key=${api.key}&with_networks=213`,
  fetchTopRated: `${api.base}/movie/top_rated?api_key=${api.key}&language=en-US`,
  fetchActionMovies: `${api.base}/discover/movie?api_key=${api.key}&with_genres=28`,
  fetchComedyMovies: `${api.base}/discover/movie?api_key=${api.key}&with_genres=35`,
  fetchHorrorMovies: `${api.base}/discover/movie?api_key=${api.key}&with_genres=27`,
  fetchRomanceMovies: `${api.base}/discover/movie?api_key=${api.key}&with_genres=10749`,
  fetchDocumentaries: `${api.base}/discover/movie?api_key=${api.key}&with_genres=99`,
};

export default requests;

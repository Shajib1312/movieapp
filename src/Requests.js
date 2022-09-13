const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=$c4ce730828b8e525bc1c971d590c7b03&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=$c4ce730828b8e525bc1c971d590c7b03&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=$c4ce730828b8e525bc1c971d590c7b03&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=$c4ce730828b8e525bc1c971d590c7b03&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=$c4ce730828b8e525bc1c971d590c7b03&language=en-US&page=1`,
};

export default requests;

const API_KEY = "80af73aaa25f094c556c7bb877b44ab8";
const host = "https://api.themoviedb.org/3";

export function getSearchURL(query) {
  return `${host}/search/multi?api_key=${API_KEY}&language=en-US&query=${query}`;
}

export function getMovieDetailsURL(movie_type, movie_id) {
  return `${host}/${movie_type}/${movie_id}?api_key=${API_KEY}&language=en-US`;
}

export function getImageURL(path, size) {
  return path
    ? `http://image.tmdb.org/t/p/w${size}${path}`
    : "https://www.sunnxt.com/images/placeholders/placeholder_vertical.gif";
}

export function getMovieCrewURL(movie_type, movie_id) {
  return `${host}/${movie_type}/${movie_id}/credits?api_key=${API_KEY}&language=en-US`;
}

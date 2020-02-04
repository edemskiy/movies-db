export const API_KEY = "80af73aaa25f094c556c7bb877b44ab8";

export function getMovieDetailsURL(movie_id) {
  return `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;
}
export function getImageURL(path, size) {
  return path
    ? `http://image.tmdb.org/t/p/w${size}${path}`
    : "https://www.sunnxt.com/images/placeholders/placeholder_vertical.gif";
}

export function getMovieCrewURL(movie_id) {
  return `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`;
}

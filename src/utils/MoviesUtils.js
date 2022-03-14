export function filterMovies(keyword, movies) {
  if (movies) {
    // todo: implement filter function
    return movies.slice(0, 10);
  }
  return null;
}

export function genMovieImageUrl(path) {
  return `https://api.nomoreparties.co/${path}`;
}

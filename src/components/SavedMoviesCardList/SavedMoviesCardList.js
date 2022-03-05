import './SavedMoviesCardList.css';
import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function SavedMoviesCardList() {
  return (
    <section className="movies">
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
    </section>
  );
}

export default SavedMoviesCardList;

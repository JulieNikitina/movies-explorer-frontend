import './Movies.css';
// import {Link} from "react-router-dom";
import React from "react";
import photoPath from '../../images/author-photo/photo.JPG';
import Portfolio from "../Portfolio/Portfolio";
import SearchForm from "../SearchForms/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";


function Movies() {
  return (
    <>
      <SearchForm/>
      <MoviesCardList/>
    </>
  );
}

export default Movies;
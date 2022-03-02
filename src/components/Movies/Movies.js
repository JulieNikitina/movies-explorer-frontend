import './Movies.css';
// import {Link} from "react-router-dom";
import React from "react";
import photoPath from '../../images/author-photo/photo.JPG';
import Portfolio from "../Portfolio/Portfolio";
import SearchForm from "../SearchForms/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";


function Movies() {
  return (
    <>
      <Header isLoggedIn={true}/>
      <SearchForm/>
      <MoviesCardList/>
      <Navigation isOpen={true}/>
    </>
  );
}

export default Movies;

import React from "react";
import SearchForm from "../SearchForms/SearchForm";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import {fetchMovies} from "../../utils/MoviesApi";
import {filterMovies} from "../../utils/MoviesUtils";
import Preloader from "../Preloader/Preloader";


function Movies() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [movies, setMovies] = React.useState(null);
  const [isOpen, setIsOpen] = React.useState(false);

  function handleOpen() {
    setIsOpen(true)
  }

  function handleClose() {
    setIsOpen(false)
  }

  function onSearchSubmit(searchQuery) {
    if (!movies) {
      setIsLoading(true);
      fetchMovies()
        .then(res => {
        setIsLoading(false);
        setMovies(res);
      }).catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
    }
    setSearchQuery(searchQuery);
  }

  const displayMovies = filterMovies(searchQuery, movies);

  // todo: прелоадер
  return (
    <>
      <Header currentPage="movies" isLoggedIn={true} onMenuClick={handleOpen}/>
      <SearchForm onSubmit={onSearchSubmit}/>
      {isLoading ? (
        <Preloader/>
      ) : (
        <>
          {!!searchQuery && !movies && (
            //todo: markup
            <div>Ничего не найдено</div>
          )}
          {!!searchQuery && !!movies && (
            <MoviesCardList movies={displayMovies}/>
          )}
        </>
      )}
      <Navigation isOpen={isOpen} onClose={handleClose} />
      <Footer/>
    </>
  );
}

export default Movies;

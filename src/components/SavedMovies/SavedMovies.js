import React from "react"
import './SavedMovies.css'
import SearchForm from "../SearchForms/SearchForm";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {projectApi} from "../../utils/MainApi";
import {removeMovieById} from "../../utils/MoviesUtils";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";


function SavedMovies(props) {
  const {loggedIn} = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    projectApi.fetchSavedMovies()
      .then((res) => {
        setSavedMovies(res.movies?.map(it => ({...it, isSaved: true})) || []);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err)
        setIsLoading(false);
      })
  }, []);

  function handleOpen() {
    setIsOpen(true)
  }

  function handleClose() {
    setIsOpen(false)
  }

  function removeSavedMovie(movie) {
    projectApi.removeMovie(movie._id)
      .then(() => setSavedMovies(removeMovieById(savedMovies, '_id', movie._id)))
      .catch(err => console.error(err));
  }

  return (
    <>
      <Header currentPage="saved-movies" isLoggedIn={loggedIn} onMenuClick={handleOpen}/>
      <SearchForm/>
      {isLoading ? (<Preloader/>) : (
        <>
          {(!savedMovies || !savedMovies.length) && (
            <p className="movies__message">У вас пока нет сохраненных фильмов</p>
          )}
          {!!savedMovies && (
            <MoviesCardList currentPage="saved-movies" movies={savedMovies} onToggleSave={null} onRemove={removeSavedMovie}/>
          )}
        </>
      )}
      <Navigation isOpen={isOpen} onClose={handleClose}/>
      <Footer/>
    </>
  );
}

export default SavedMovies;

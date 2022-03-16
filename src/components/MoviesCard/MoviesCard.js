
import './MoviesCard.css';
import React from "react";
import {genMovieImageUrl, timeFormatter} from "../../utils/MoviesUtils";


function MoviesCard(props) {
  const { movie, onToggleSave } = props;
  const saveButtonClassName = movie.isSaved ? "movie__save-button movie__save-button_active" : "movie__save-button";
  const onClickHandler = () => onToggleSave(movie);
  return (
    <article className="movie">
      <img className="movie__photo" src={genMovieImageUrl(movie.image.url)} alt={movie.nameRU}/>
      <div className="movie__text-block">
        <h2 className="movie__title">{movie.nameRU}</h2>
        <button className={saveButtonClassName} type="button" onClick={onClickHandler}/>
      </div>
      <span className="movie__time">{timeFormatter(movie.duration)}</span>
    </article>
  );
}

export default MoviesCard;

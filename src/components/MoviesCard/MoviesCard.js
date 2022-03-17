
import './MoviesCard.css';
import React from "react";
import {genMovieImageUrl, timeFormatter} from "../../utils/MoviesUtils";


function MoviesCard(props) {
  const { movie, onToggleSave, onRemove } = props;
  const saveButtonClassName = movie.isSaved ? "movie__save-button movie__save-button_active" : "movie__save-button";
  const movieSrc = movie.image.url ? genMovieImageUrl(movie.image.url) : movie.image
  return (
    <article className="movie">
      <img className="movie__photo" src={movieSrc} alt={movie.nameRU}/>
      <div className="movie__text-block">
        <h2 className="movie__title">{movie.nameRU}</h2>
        {!!onToggleSave && <button className={saveButtonClassName} type="button" onClick={() => onToggleSave(movie)}/>}
        {!!onRemove && <button className="movie__delete-button" type="button" onClick={() => onRemove(movie)}/>}
      </div>
      <span className="movie__time">{timeFormatter(movie.duration)}</span>
    </article>
  );
}

export default MoviesCard;

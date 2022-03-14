
import './MoviesCard.css';
import React from "react";
import {genMovieImageUrl} from "../../utils/MoviesUtils";


function MoviesCard(props) {
  const { movie } = props;
  const [isSaved, setIsIsSaved] = React.useState(false);
  const saveButtonClassName = isSaved ? "movie__save-button movie__save-button_active" : "movie__save-button";
  const onClickHandler = () => {
    setIsIsSaved(!isSaved);
  };
  return (
    <article className="movie">
      <img className="movie__photo" src={genMovieImageUrl(movie.image.url)} alt={movie.nameRU}/>
      <div className="movie__text-block">
        <h2 className="movie__title">{movie.nameRU}</h2>
        <button className={saveButtonClassName} type="button" onClick={onClickHandler}/>
      </div>
      {/*todo: format duration*/}
      <span className="movie__time">{movie.duration}</span>
    </article>
  );
}

export default MoviesCard;

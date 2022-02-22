
import './MoviesCard.css';
import React from "react";
import moviePhotoPath from '../../images/movie/movie.png';


function MoviesCard() {
  return (
    <article className="movie">
      <img className="movie__photo" src={moviePhotoPath} alt="Название фильма"/>
      <div className="movie__text-block">
        <h2 className="movie__title">Название</h2>
        <div className="movie__like-section">
          <button className='movie__like-button movie__like-button_active' type="button"/>
        </div>
      </div>
    </article>
  );
}

export default MoviesCard;

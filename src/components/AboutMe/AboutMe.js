import './AboutMe.css';
// import {Link} from "react-router-dom";
import React from "react";
import photoPath from '../../images/author-photo/photo.JPG';
import Portfolio from "../Portfolio/Portfolio";


function AboutMe() {
  return (
    <section className="author">
      <h3 className="section__title">Студент</h3>
      <div className="author__content">
        <article className="author__column">
          <h3 className="author__name">Юля</h3>
          <p className="author__profession">Go-developer. 32 года</p>
          <p className="author__description">Тут будет инфа обо мне</p>
          <ul className="author__links">
            <a href="#" className="author__link">Facebook</a>
            <a href="#" className="author__link" >Github</a>
          </ul>
        </article>
          <img className="author__photo" src={photoPath} alt="Фото автора"/>
      </div>
      <Portfolio/>
    </section>

  );
}

export default AboutMe;

import './AboutMe.css';
import React from "react";
import photoPath from '../../images/author-photo/photo.JPG';
import Portfolio from "../Portfolio/Portfolio";


function AboutMe() {
  return (
    <section className="author" id="author">
      <h3 className="author__title">Студент</h3>
      <div className="author__content">
        <article className="author__column">
          <h3 className="author__name">Юля</h3>
          <p className="author__profession">Go-developer. 32 года</p>
          <p className="author__description">Сбежала в IT. Год назад закончила курс Яндекс.Практикум
            "Python-разработчик", а теперь пишу на Golang в Aviasales.
            Прошла курс по фронтенду, чтобы понимать весь цикл разработки и потому что учение - свет) </p>
          <ul className="author__links">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="author__link">Facebook</a>
            <a href="https://github.com/JulieNikitina?tab=repositories" rel="noreferrer" className="author__link" >Github</a>
          </ul>
        </article>
          <img className="author__photo" src={photoPath} alt="Фото автора"/>
      </div>
      <Portfolio/>
    </section>

  );
}

export default AboutMe;

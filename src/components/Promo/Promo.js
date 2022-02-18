import './Promo.css';
// import {Link} from "react-router-dom";
import React from "react";
import NavTab from "../NavTab/NavTab";

function Promo() {
  return (
    <section className="promo">
      <h2 className="section__main-title">Учебный проект студента факультета Веб-разработки. </h2>
      <NavTab/>
    </section>

  );
}

export default Promo;

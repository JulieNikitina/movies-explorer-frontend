import './Main.css';
// import {Link} from "react-router-dom";
import React from "react";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Header from "../Header/Header";

function Main() {
  return (
    <>
      <Header isLoggedIn={false}/>
      <Promo/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
    </>
  );
}

export default Main;

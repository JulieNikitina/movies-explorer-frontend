//TODO: проверить по подключению шрифтов, нормалайза и апп.цсс логику
import '../../index.css';

import './App.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React from "react";
// import {Route, Routes, useNavigate} from "react-router-dom";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {BrowserRouter} from "react-router-dom";
import Main from "../Main/Main";


function App() {

  // const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  // function handleLogin() {
  //   setLoggedIn(true)
  // }

  function handleLogout() {
    setLoggedIn(false)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <BrowserRouter>
          <Header isLoggedIn={loggedIn} handleLogout={handleLogout}/>
        </BrowserRouter>
        <Main/>
        <Footer/>

      </div>
    </CurrentUserContext.Provider>

  );
}

export default App;

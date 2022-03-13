import '../../index.css';

import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import SavedMovies from "../SavedMovies/SavedMovies";
import {projectApi} from "../../utils/MainApi";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";


function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);

  function handleLogin() {
    setLoggedIn(true)
  }

  function handleLogout() {
    projectApi.signOut()
      .then(() => {
        window.location.href = '/sign-in';
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/saved-movies" element={<SavedMovies/>}/>
            <Route path="/profile" element={<Profile currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
            <Route path="/sign-up" element={<Register/>}/>
            <Route path="/sign-in" element={<Login handleLogin={handleLogin}/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </CurrentUserContext.Provider>

  );
}

export default App;

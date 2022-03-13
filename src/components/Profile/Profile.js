import './Profile.css';
import React from "react";
import Header from "../Header/Header";
import {projectApi} from "../../utils/MainApi";
import * as auth from "../../utils/auth";

function Profile(props) {
  const { currentUser, setCurrentUser } = props;
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    auth.checkToken().then((res) => {
      if (res) {
        setEmail(res.user.email);
        setName(res.user.name);
      }
    }).catch((error) => {
      console.error(error)}
    );
  }, []);

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }
  function handleUpdateUser(name, email) {
    projectApi.patchUserInfo(name, email)
      .then((resultUserInfo) => {
        setName(resultUserInfo.user.name);
        setEmail(resultUserInfo.user.email);
        setCurrentUser({
            name: resultUserInfo.user.name,
            email: resultUserInfo.user.email,
            _id: resultUserInfo.user._id
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateUser(name, email);
  }
  return (
    <>
      <Header isLoggedIn={true}/>
      <section className="profile">
        <div className="profile__content">
          <h1 className="profile__title">Привет, {name}!</h1>
          <form className="profile__form" onSubmit={handleSubmit}>
            <div className="profile__form-field">
              <label className="profile__form-label">Имя</label>
              <input className="profile__form-input" placeholder={currentUser.name} value={name} onChange={handleNameChange}/>
            </div>
            <div className="profile__form-field">
              <label className="profile__form-label">email</label>
              <input className="profile__form-input" placeholder={currentUser.email} value={email} onChange={handleEmailChange}/>
            </div>
            <div className="profile__form-footer">
              <button className="profile__button" type={"submit"}>Редактировать</button>
              <button className="profile__button profile__button_red" >Выйти из аккаунта</button>
            </div>
          </form>
        </div>
      </section>
    </>

  );
}

export default Profile;
